import { MONGO_URI, DB_NAME } from "../configs/db.configs.js";
import bcrypt from 'bcryptjs';
import { connectDb } from "../utilities/connectDb.utilities.js";

export function getUserInfos (req, res) {
    var { user } = res.locals;
    res.send({datas: user});
}