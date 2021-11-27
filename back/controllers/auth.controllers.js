// import { connectDb } from "../utilities/connectDb.utilities.js";
import { MONGO_URI, DB_NAME } from "../configs/db.configs.js";
import bcrypt from 'bcryptjs';
import { connectDb } from "../utilities/connectDb.utilities.js";

export async function register (req, res) {
    let db = await connectDb()
    const collection = db.collection('users');
    req.body.password = bcrypt.hashSync(req.body.password)
    await collection.insertOne(req.body);
    res.send({message: 'User successfully registered'})
}