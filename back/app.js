import { authRoutes } from './routes/auth.routes.js';
import { userRoutes } from './routes/user.routes.js';
import { productRoutes } from './routes/products.routes.js';
import { orderRoutes } from './routes/order.routes.js';
import express from 'express';
import cors from 'cors';


import {MongoClient} from "mongodb";
import { MONGO_URI, DB_NAME } from "./configs/db.configs.js";


const app = express()
const port = 3000

var corsOptions = {
  origin: "*",
};

app.use(cors(corsOptions));
app.use(cors())
app.use(express.json());
app.use('/api/auth', authRoutes);
app.use('/api/user', userRoutes);
app.use('/api/product', productRoutes)
app.use('/api/order', orderRoutes)


app.get('/', async (req, res) => {
  res.send({message: "LaidsFruitsEtLegumes back-end :)"})
})


app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
})