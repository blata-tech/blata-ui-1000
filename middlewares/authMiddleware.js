import jwt from 'jsonwebtoken';
export const authMiddleware = (req, res, next) => {
    try {
        const token = req.headers.authorization.split("")[1];
        if (!token) {
            res.status(401).json({message: 'no token provided'});
        }
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();

    }catch(err) {
        res.status(401).json({error: 'unauthrized access'})

    }

};
export const adminOnly = (req, res, next) => {
    if(req.user.role !== 'admin') {
        return res.status(403).json({message: 'access forbidden: admin only'});
    }
    next();
};