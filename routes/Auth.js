import express from 'express';
import authController from "../controllers/Auth";

const route=express.Router();

/**
 * @swagger
 * /api/auth/signup:
 *   post:
 *     description: Create a new item
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Item'
 *     responses:
 *       201:
 *         description: User created
 */
route.post('/signup',authController.signup);
export default route;