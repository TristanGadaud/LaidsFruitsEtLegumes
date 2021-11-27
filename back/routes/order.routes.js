import { Router } from 'express';
import { getUser } from '../middleware/getUser.js';
import { createOrder } from '../controllers/order.controller.js';

export const orderRoutes = Router();

orderRoutes.post('/', createOrder);
