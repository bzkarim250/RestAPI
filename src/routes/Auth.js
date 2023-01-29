import express from 'express';
import authController from "../controllers/Auth";
import {validate} from '../middlewares/validation';
import signupSchema from '../validation/signup';

const route=express.Router();
route.post('/signup',validate(signupSchema),authController.signup);
route.get('/user/:id',authController.singleUser);
route.post('/login',authController.login);
export default route;