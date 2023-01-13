import express from 'express';
import authController from "../controllers/Auth";

const route=express.Router();

route.post('/signup',authController.signup);
export default route;