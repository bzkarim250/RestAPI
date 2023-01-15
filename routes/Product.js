import express from 'express';
import productController from '../controllers/Product';

const route=express.Router();

route.post('/addNewProduct',productController.addNewProduct);
route.get('/allProducts',productController.allProducts);
route.get('/singleProduct/:id',productController.singleProduct);

export default route;