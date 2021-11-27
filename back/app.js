import { authRoutes } from './routes/auth.routes.js';
import { userRoutes } from './routes/user.routes.js';
import express from 'express';

import {MongoClient} from "mongodb";
import { MONGO_URI, DB_NAME } from "./configs/db.configs.js";


const app = express()
const port = 3000

app.use(express.json());
app.use('/api/auth', authRoutes);
app.use('/api/user', userRoutes)

app.get('/', async (req, res) => {
  res.send({message: "LaidsFruitsEtLegumes back-end :)"})
})


app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
})