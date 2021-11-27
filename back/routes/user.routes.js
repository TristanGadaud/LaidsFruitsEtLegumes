import { Router } from 'express';
import { getUser } from '../middleware/getUser.js';
import { jwtVerify } from '../middleware/authJwt.js';
import { getUserInfos } from '../controllers/user.controllers.js';

export const userRoutes = Router();

userRoutes.get('/', jwtVerify, getUser, getUserInfos);