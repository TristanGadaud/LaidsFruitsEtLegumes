import bcrypt from 'bcryptjs';
import { JWT_SECRET, EXPIRY } from '../configs/jwt.config.js';
import jwt from 'jsonwebtoken';

export function emitJwtToken(req, res) {
    var { user } = res.locals;
    var passwordIsValid = bcrypt.compareSync(req.body.password, user.password);
    if (!passwordIsValid)
        return res.status(401).send({ message: 'Invalid Password' });
    var accessToken = jwt.sign({ email: user.email }, JWT_SECRET, {
        expiresIn: EXPIRY,
    });
    return res.send({access_token: accessToken})
}