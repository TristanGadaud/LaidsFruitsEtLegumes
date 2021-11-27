import { MONGO_URI, DB_NAME } from "../configs/db.configs.js";
import bcrypt from 'bcryptjs';
import { connectDb } from "../utilities/connectDb.utilities.js";

export async function createOrder(req, res) {
    var { user } = res.locals;

    //voir addProduct dans products.controller
}