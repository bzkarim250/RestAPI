import express from 'express';
import productController from '../controllers/Product';

const route=express.Router();

route.post('/addNewProduct',productController.addNewProduct);
route.get('/allProducts',productController.allProducts);
route.get('/singleProduct/:id',productController.singleProduct);
route.patch('/update/:id',productController.updateProduct);
route.delete('/delete/:id',productController.deleteProduct);

export default route;