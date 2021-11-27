import { MONGO_URI, DB_NAME } from "../configs/db.configs.js";
import { GOOGLE_KEY } from "../configs/google.config.js";
import bcrypt from 'bcryptjs';
import { connectDb } from "../utilities/connectDb.utilities.js";
import { ObjectId } from "mongodb";
import axios from 'axios';

import { createRequire } from "module";
const require = createRequire(import.meta.url);


async function get_distance(locBuy, locSell) {

    var config = {
        method: 'get',
        url: 'https://maps.googleapis.com/maps/api/distancematrix/json?origins=' + locBuy + '&destinations=' + locSell + '&units=metric&key=' + GOOGLE_KEY,
        headers: {}
    };

    try {
        let req = await axios(config)
        let res = await req.data
        console.log(res)
        if (res?.rows && res?.rows.length != 0 && res.rows[0]?.elements && res.rows[0]?.elements.length != 0 && res.rows[0]['elements'][0].distance?.value)
            return res.rows[0]['elements'][0].distance.value
        return null
    } catch (err) {
        console.log("Error google api")
        console.log(err)
        return null
    }
};

export async function addProduct(req, res) {
    var { user } = res.locals;
    let db = await connectDb()
    const collection = db.collection('products');

    let newProduct = {
        "seller_id": user._id,
        "seller_firstname": user.firstname,
        "seller_lastname": user.lastname,
        "seller_location": user.address,
        "title": req.body.title,
        "price": req.body.price,
        "pic_url": null,
        "in_stock": req.body.in_stock,
        "description": req.body.description,
        "updated_at": Date.now(),
    }
    try {
        collection.insertOne(newProduct)
    } catch (err) {
        console.log("Error during insertion of a new product")
        res.status(500).send({ message: "Error during insertion of a new product" })
    }
    res.status(200).send({ message: "New product added successfully" });
}

export async function getProducts(req, res) {
    var { title, product_id, seller_id, location } = req.query;
    let db = await connectDb()
    const collection = db.collection('products');
    let data = null
    let lookup = {}

    if (title)
        lookup = { $text: { $search: title } }
    if (product_id)
        lookup = { '_id': new ObjectId(product_id) }
    if (seller_id)
        lookup = { seller_id: new ObjectId(seller_id) }
        
    data = await collection.find(lookup).toArray(async function (err, result) {
        if (err) {
            console.log("Error in getProducts")
            console.log(err)
            res.status(500).send({ message: "Error in getProducts" });
        }
        if (location) {
            for (let i = 0; i < result.length; i++)
                result[i].distance = await get_distance(location, result[i].seller_location)
            result.sort((a, b) => (a.distance == null || b.distance == null) ? -1 : (a.distance > b.distance) ? 1 : -1)
        }
        res.send({ data: result });
    })
}