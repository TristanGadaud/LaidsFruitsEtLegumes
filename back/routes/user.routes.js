import { Router } from 'express';
import { getUser } from '../middleware/getUser.js';
import { jwtVerify } from '../middleware/authJwt.js';
import { getUserInfos, getUserInfosById } from '../controllers/user.controllers.js';

export const userRoutes = Router();

userRoutes.get('/', jwtVerify, getUser, getUserInfos);
userRoutes.get('/getUserById', getUserInfosById);