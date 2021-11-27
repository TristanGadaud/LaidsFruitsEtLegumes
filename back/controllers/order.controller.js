import { MONGO_URI, DB_NAME } from "../configs/db.configs.js";
import bcrypt from 'bcryptjs';
import { connectDb } from "../utilities/connectDb.utilities.js";
import { ObjectId } from "mongodb";

export async function createOrder(req, res) {
    var { user } = res.locals;
    var { product_id, seller_id, quantity, seller_firstname, seller_lastname, title } = req.body;
    let lookup = {}

    let db = await connectDb();

    if (product_id)
        lookup = { '_id': new ObjectId(product_id) }

    let data = await db.collection('products').findOne(lookup);
    
    try {
        if (data.in_stock < quantity)
            return res.status(400).send({ message: "Not enough stock" })
    } 
    catch (err) {
        res.status(400).send({ message: "Product not found" })
    }
    

    const collection = db.collection('orders');

    let newOrder = {
        "buyer_id": user._id,
        "buyer_firstname": user.firstname,
        "buyer_lastname": user.lastname,
        "seller_id": seller_id,
        "seller_firstname": seller_firstname,
        "seller_lastname": seller_lastname,
        "title": title,
        "quantity": quantity,
        "accepted": true,
        "date": Date.now(),
    }

    try {
        collection.insertOne(newOrder)
    }
    catch (err) {
        console.log("Error during insertion of a new order")
        res.status(500).send({ message: "Error during insertion of a new order" })
    }
    res.status(200).send({ message: "New order added successfully" });
}