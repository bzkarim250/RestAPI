import express from "express";
import userController from "../controllers/User";

const route=express.Router();

route.get('/all',userController.allUsers);
route.get('/:id',userController.getUserById);
export default route;