import express from 'express';
import productController from '../controllers/Product';
import { verifyToken } from '../middlewares/authenticate';

const route=express.Router();

route.post('/addNewProduct',productController.addNewProduct);
route.get('/all',verifyToken,productController.allProducts);
route.get('/singleProduct/:id',productController.singleProduct);
route.patch('/update/:id',productController.updateProduct);
route.delete('/delete/:id',productController.deleteProduct);

export default route;