import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import connectDb from './src/database/dbConnect';
import authRoute from './src/routes/Auth';
import swaggerDocs from './src/api-docs/swagger';
import productRoute from './src/routes/Product';
import userRoute from './src/routes/User';



dotenv.config();

const app=express();
app.use(express.json());
app.use(cors());
connectDb();
const port=process.env.PORT?process.env.PORT:3000;
app.listen(port,()=>{
    console.log(`app is listenning to ${port}`);
})

swaggerDocs(app);
app.use("/api/auth",authRoute);
app.use("/api/product",productRoute);
app.use("/api/user/",userRoute);
//404 page  //middleware
app.use((req,res)=>{
    res.status(404).send('Page note found');
})

export default app;

