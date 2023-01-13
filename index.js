import express from 'express';
import connectDb from './database/dbConnect';
import dotenv from 'dotenv';
import authRoute from './routes/Auth';

dotenv.config();

const app=express();
app.use(express.json());
connectDb();
app.listen(process.env.PORT||3000,()=>{
    console.log(`app is listenning to ${process.env.PORT}`);
})

app.use("/api/auth",authRoute);

