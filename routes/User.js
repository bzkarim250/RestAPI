import express from "express";
import userController from "../controllers/User";

const route=express.Router();

route.get('/allUsers',userController.allUsers);
export default route;