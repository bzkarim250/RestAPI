import jwt from "jsonwebtoken";
import dotenv from 'dotenv';
dotenv.config();
//payload=id
const maxAge=24*60*60;
export const createToken=(payload)=>{
    return jwt.sign(payload,process.env.JWT_SCRETE_KEY,{expiresIn:maxAge});
}
export const verfyToken=(payload)=>{
    return jwt.sign(payload,process.env.JWT_SCRETE_KEY);
}