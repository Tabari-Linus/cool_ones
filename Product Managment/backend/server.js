import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';

import productRoutes from './routes/product.route.js'


dotenv.config();

const app = express();

app.use(express.json()) // allows to use json in req.body


app.use("/api/products", productRoutes);


app.listen(5000, ()=>{
    connectDB();
    console.log("Server start at local host 1")
})



// 