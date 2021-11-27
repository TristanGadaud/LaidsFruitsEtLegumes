import { MONGO_URI, DB_NAME } from "../configs/db.configs.js";
import bcrypt from 'bcryptjs';
import { connectDb } from "../utilities/connectDb.utilities.js";
import { ObjectId } from "mongodb";

export function getUserInfos(req, res) {
    var { user } = res.locals;
    res.send({ datas: user });
}

export async function getUserInfosById(req, res) {
    try {
        let db = await connectDb()
        const collection = db.collection('users');
        const user = await collection.findOne({
            '_id': new ObjectId(req.query.user_id)
        });
        if (user != undefined) {
            delete user.password
            return res.send({data: user})
        }
        return res.status(500).send({message: "User not found"})
    } catch (err) {
        console.log("Erreur durant la récupération de l'user")
        console.log(err)
        return res.status(500).send({message: "Error during the retrieving of the user"})
    }
}