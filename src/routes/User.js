import express from "express";
import userController from "../controllers/User";
import userSchema from '../validation/signup';
import {validate} from '../middlewares/validation';

const route=express.Router();
route.post('/signup',validate(userSchema),userController.signup);
route.post('/login',userController.login);
route.get('/all',userController.allUsers);
route.get('/:id',userController.getUserById);
export default route;