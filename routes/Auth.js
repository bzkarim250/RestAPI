import express from 'express';
import authController from "../controllers/Auth";
import validate from '../middlewares/validation';

const route=express.Router();
route.post('/signup',validate,authController.signup);
route.get('/user/:id',authController.singleUser);
route.post('/login',authController.login);
export default route;