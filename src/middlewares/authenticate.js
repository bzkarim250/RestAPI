import { verify } from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export const verifyToken=(req,res,next)=>{
    try {
        const authHeader = req.headers.token;
        if(!authHeader)
            return res.status(401).json({staus:"error",error:"You are not authenticated"});
        const token=authHeader.split(' ')[1];
        if(!token) 
            return res.status(401).json({status:"error",error:"You are not authenticated"});
        const verified=verify(token,process.env.JWT_SCRETE_KEY);
        req.user=verified;
        next();
    } catch (error) {
        res.status(401).json({erro:error.message});
    }
}
