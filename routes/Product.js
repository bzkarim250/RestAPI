import express from 'express';
import productController from '../controllers/Product';

const route=express.Router();

route.post('/addNewProduct',productController.addNewProduct);

export default route;