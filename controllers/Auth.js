import User from "../model/User";
import bcrypt from 'bcrypt';
import dotenv from "dotenv";
import { createToken } from "../helpers/jwt";

dotenv.config();

class authController{
    static async signup(req,res){
        try{
        const saltRounds=10;
        const { name,email,age,password } =req.body;
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        const newUser=await new User({
            name:name,
            email:email,
            age:age,
            password:hashedPassword
        });
        const user=await newUser.save();
        res.status(201).json(user);
    }
    catch(error){
        const handleErrors = (error) => {
            let errors={name:'',email:'',password:'',age:''};
            if (error.code === 11000) {
                errors.email = 'email already exists';
            }
            if (error.message.includes('User validation failed')) {
                Object.values(error.errors).forEach(({ properties }) => {
                    errors[properties.path] = properties.message;
                });
            }
            if (error.isJoi) {
                error.details.forEach(({ path, message }) => {
                    errors[path] = message;
                });
            }
            return errors;
        }
        
        res.status(400).json({error:handleErrors(error)});
    }
}

static async login(req,res){
    try {
        const user=await User.findOne({email:req.body.email});
        if(!user){
            res.status(404).json({error:'Wrong Credentials'});
        }
        const originalPassword=user.password;
        const password=req.body.password;
        bcrypt.compare(password,originalPassword, function(err, result) {
            if (result) {
                const {password,...others}=user._doc;
                const accessToken=createToken({user:user._id});
                res.status(200).json(Object.assign({},others,{accessToken}));
            } else {
              res.status(404).json({error:"Wrong credentials"});
            }
          });
    } catch (error) {
        res.status(404).json({error:error.message});
    }
}
static async singleUser(req,res){
    try {
        const single=await User.findById(req.params.id);
        res.status(200).json(single);
    } catch (error) {
        res.status(404).json({error:error.message});
    }
}
}

export default authController;