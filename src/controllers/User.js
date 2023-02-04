import User from "../model/User";
import bcrypt from 'bcrypt';
import { createToken } from "../helpers/jwt";

class userController{
    static async signup(req,res){
        try {
            const user = new User(req.body);
            const salt = await bcrypt.genSalt(10);
            user.password = await bcrypt.hash(user.password,salt)
            await user.save();
            res.status(201).json({status:"success",data:user});
          } catch (error) {
            res.status(401).json({status:"fail", error: error.message });
          }
    }

    static async login(req,res){
        try {
            const user=await User.findOne({email:req.body.email});
            if(!user)
                return res.status(401).json({status:"fail",error:"invalid credentials"});
            const pass=await bcrypt.compare(req.body.password,user.password);
            if(!pass)
                return res.status(401).json({status:"fail",error:"incorrect password"});
            const accessToken=createToken({user:user._id});
            res.status(200).json({status:"success",data:user,token:accessToken});
        } catch (error) {
            res.status(401).json({status:"error",error:error.message})
        }
    }

    static async allUsers(req,res){
        try {
            const users=await User.find();
            if(users.length===0){
                res.status(200).json({message:"No users yet registered"});
            }else{
                res.status(200).json({status:"success",data:users});
            }
        } catch (error) {
            res.status(404).json({status:"error",error:error.message});
        }
    }

    static async getUserById(req,res){
        try {
            const user=await User.findById(req.params.id);
            if(user.length===0){
                res.status(200).json({message:"No such registered user"});
            }else{
                res.status(200).json({status:"success",data:user});
            }
        } catch (error) {
            res.status(404).json({status:"Error",error:error.message});
        }
    }
    static async updateUser(req,res){
        try {
            const user=req.body;
            const salt=await bcrypt.genSalt(10);
            user.password =await bcrypt.hash(user.password,salt)
            const update=await User.findByIdAndUpdate(req.params.id,{$set:user},{new:true});
            res.status(200).json({status:"success",data:update});
        } catch (error) {
            res.status(500).json({status:"error",error:error.message});
        }
    }
}
export default userController;