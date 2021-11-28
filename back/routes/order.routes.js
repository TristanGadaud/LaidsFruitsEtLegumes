import { Router } from 'express';
import { getUser } from '../middleware/getUser.js';
import { jwtVerify } from '../middleware/authJwt.js';
import { createOrder, getOrders } from '../controllers/order.controller.js';

export const orderRoutes = Router();

orderRoutes.post('/', jwtVerify, getUser, createOrder);
orderRoutes.get('/', getOrders);
