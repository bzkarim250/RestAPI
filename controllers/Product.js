import mongoose from "mongoose";
import Product from "../model/Product";

class productController{
    static async addNewProduct(req,res){
        try {
            const newProduct= await Product({
                name:req.body.name,
                price:req.body.price
            });
            const product=await newProduct.save();
            res.status(201).json(product);  
        } catch (error) {
            res.status(401).json({error:error.message});
        }
    }
}
export default productController;