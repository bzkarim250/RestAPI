import User from "../model/User";
class userController{
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
}
export default userController;