import { error } from "console";
import { Pool } from "../config/db.js";
export const getProducts = async(req, res) => {
    try{
        const result = await pool.query('select * from products');
        res.json({products: result.rows});

    }catch(err) {
        res.status(500).json({message: 'failed to retrieve products', error: err.message})
    }

};
export const addProduct = async(req, res) => {
    const {name, description, price, stock} = req.body;
    const image = req.file ? req.fileName : null;
    try{
        const result =await pool.query('insert into products (name, description, price, stock, image) values ($1, $2, $3,$4, $5) returning * ' ,[name, description, price, stock, image]);
        res.status(201).json({message: 'product added successfully', product: result.rows[0]});
    }catch(err) {
        res.status(500).json({message: 'failed to add product', error: err.message});

    }
};