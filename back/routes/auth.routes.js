import { Router } from 'express';
import { register } from '../controllers/auth.controllers.js';
import { getUser } from '../middleware/getUser.js';
import { emitJwtToken } from '../utilities/jwt.utilities.js';

export const authRoutes = Router();

authRoutes.post('/signup', register);
authRoutes.post('/signin', getUser, emitJwtToken);
