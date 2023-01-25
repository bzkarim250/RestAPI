import User from "../model/User";
class userController{
    static async allUsers(req,res){
        try {
            const users=await User.find();
            if(users){
                res.status(200).json(users);
            }else{
                res.status(204).json({error:"No users yet registered"});
            }
        } catch (error) {
            res.status(404).json({error:error.message});
        }
    }
}
export default userController;