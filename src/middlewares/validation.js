import { signupSchema } from "../helpers/schemas/signup";

const validate=(req,res,next)=>{
    const { error } = signupSchema.validate(req.body);
    if(error){
        if(error.message.includes('^[a-zA-Z]+(?:[- ]?[a-zA-Z]+)*$')){
            res.status(400).json({message:"Name is invalid"});
        }
        if(error.message.includes('^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+.[A-Z|a-z]{2,}$')){
            res.status(400).json({message:"Email is not valid"});
        }
        if(error.message.includes('^(?=.[a-z])(?=.[A-Z])(?=.[0-9])(?=.[!@#$%^&*])(?=.{8,})')){
            res.status(400).json({message:"password must contain at least one uppercase letter, one lowercase letter, one digit, one special character and at least 8 characters"});
        }
        res.status(400).json({message:error.details[0].message});
        return;
    }
    next();
}
export default validate;
