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
    static async allProducts(req,res){
        try {
            const products=await Product.find().sort({createdAt:-1});
            res.status(200).json(products);
        } catch (error) {
            res.status(404).json({error:error.message});
        }
    }
    static async singleProduct(req,res){
        try {
            const product= await Product.findById(req.params.id);
            res.status(200).json(product);
        } catch (error) {
            res.status(404).json({error:error.message});
        }
    }
    static async updateProduct(req,res){
        try {
            const update=await Product.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true});
            res.status(201).json(update);
        } catch (error) {
            res.status(404).json({error:error.message});
        }
    }
}
export default productController;