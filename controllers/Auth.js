import User from "../model/User";
import bcrypt from 'bcrypt';

class authController{
    static async signup(req,res){
        try{
        const saltRounds=10;
        const password=req.body.password;
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        const newUser=await new User({
            name:req.body.name,
            email:req.body.email,
            age:req.body.age,
            password:hashedPassword
        });
        const user=await newUser.save();
        res.status(201).json(user);
    }
    catch(error){
        const handleErrors=(error)=>{
            let errors={email:'',password:''};
            if(error.code===11000){
                errors.email='email already exists';
                return errors;
            }
            if(error.message.includes('User validation failed')){
                Object.values(error.errors).forEach(({properties})=>{
                    errors[properties.path]=properties.message;
                });
            }
            return errors;
        }
        res.status(400).json({error:handleErrors(error)});
    }
}
static async allUsers(req,res){
    try {
        const users= await User.find();
        res.status(200).json(users);
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