import * as Joi from 'joi';
import { signupSchema } from "../helpers/schemas/signup";

const validate=(req,res,next)=>{
    const { error } = signupSchema.validate(req.body);
    if(error){
        res.status(400).json({message:error.details[0].message});
        return;
    }
    next();
}
export default validate;
