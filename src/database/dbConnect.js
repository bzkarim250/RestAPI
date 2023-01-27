import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();
const dburl=process.env.MONGODB_URL;

mongoose.set('strictQuery', false);

const connectDb=async()=>{
    await mongoose.connect(dburl,{useNewUrlParser: true,useUnifiedTopology: true})
    .then(()=>console.log('database connected'))
    .catch((error)=>console.log(error));
}

export default connectDb;