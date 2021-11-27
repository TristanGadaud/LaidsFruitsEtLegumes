import { MongoClient } from "mongodb";
import { MONGO_URI, DB_NAME } from "../configs/db.configs.js";

export async function createDb() {
  const client = new MongoClient(MONGO_URI);
  try {
    await client.connect();
    await client.db(DB_NAME).command({ ping: 1 });
    console.log("Connected successfully to server");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}

export async function connectDb() {
  const client = new MongoClient(MONGO_URI)
  await client.connect();
  var db = await client.db(DB_NAME)
  return db
}

export async function getUserById(id) {
  let db = await connectDb()
  const collection = db.collection('users');
  const user = await collection.findOne({
    id: id
  }); 
  if (user)
    return user
  return null
}

export async function getUserByEmail(email) {
  try {
    let db = await connectDb()
    const collection = db.collection('users');
    const user = await collection.findOne({
      email: email
    });
    if (user != undefined)
      return user
    return null
  } catch (err) {
    console.log("Erreur durant la récupération de l'user")
    console.log(err)
  }
  
}