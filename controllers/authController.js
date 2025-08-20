import {pool} from '..config/db.js';
import bycrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { runInThisContext } from 'vm';
dotenv.config();
//register user
export const register = async (req, res) => {
    const {username, email, password, role} = req.body;
    try{
        const hashedPassword = await bycrypt.hash(password, 10);
    const result = await pool.query(
    'insert into users (username, email, password, role) values ($1, $2, $3, $4) returning id, username, email, role',
        [username, email, hashedPassword, role || 'customer']
    );
    res.status(201).json({message: 'user registered successfully', user: result.rows[0]});
} catch(err){
    res.status(500).json({message: 'user registration failed', error: err.message});
}
};
this 
export const login = async (req, res) => {
    const {email, password} = req.body;
    try {
        const result = await pool.query('select * from users where email = $1', [email]);
        if(result.rows.length === 0) {
            return res.status(400).json({error: 'user not found'});
        }
        const user = result.rows[0];
        const isMatch = await bycrypt.compare(password, user.password);
        if(!isMatch){
            return res.status(400).json({message: 'invalid credentials'});
        }
        const token = jwt.sign(
            {id: user.name, role: user.role},
            process.env.JWT_SECRET,
            {expiresIn: '1d'}
        );
        res.json({message: 'login successful', token});
    } catch(err) {
        res.status(500).json({message: 'login failed', error: err.message});
    }
};


