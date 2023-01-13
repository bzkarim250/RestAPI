import User from "../model/User";

class authController{
    static async signup(req,res){
        const newUser=await new User({
            name:req.body.name,
            age:req.body.age,
        });
        const user=await newUser.save();
        res.status(201).json(user);
    }
    catch(error){
        console.log(error);
    }
}

export default authController;