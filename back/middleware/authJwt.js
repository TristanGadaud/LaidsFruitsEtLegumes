import bcrypt from 'bcryptjs';
import { JWT_SECRET, EXPIRY } from '../configs/jwt.config.js';
import jwt from 'jsonwebtoken';

export async function jwtVerify(req, res, next) {
  var token = req.headers.authorization?.split(' ')[1];

  if (!token) {
    return res.status(403).send({
      message: 'No token provided!',
    });
  }

  try {
    var decoded = jwt.verify(token, JWT_SECRET);
  } catch (err) {
    return res.status(401).send({ message: 'Unauthorized!' });
  }

  res.locals.userEmail = decoded?.email;
  next();
};
