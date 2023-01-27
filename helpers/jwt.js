import jwt from "jsonwebtoken";
import dotenv from 'dotenv';
dotenv.config();
//payload=id
const maxAge=60*60*1000;
export const createToken=(payload)=>jwt.sign(payload,process.env.JWT_SCRETE_KEY,{expiresIn:maxAge});
export const verify=(payload)=>jwt.verify(payload,process.env.JWT_SCRETE_KEY);