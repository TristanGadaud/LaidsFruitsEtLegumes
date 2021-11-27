import { Router } from 'express';
import { getUser } from '../middleware/getUser.js';
import { jwtVerify } from '../middleware/authJwt.js';
import { addProduct, getProducts } from '../controllers/products.controllers.js'; 

export const productRoutes = Router();

productRoutes.post('/', jwtVerify, getUser, addProduct);
productRoutes.get('/', getProducts);
