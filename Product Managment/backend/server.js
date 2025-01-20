import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import Product from './models/product.model.js';

dotenv.config();

const app = express();

app.post('/api/products', async (req,res) =>{
    const product = req.body;

    if( !product.name || !product.price || !product.image){
        return res.status(400).json({succes:false, message: "Please provide all fields"});
    }

    const newProduct = new Product(product);

    try{
        await newProduct.save();
        res.status(201).json({succes: true, data: newProduct});
    } catch (error){
        console.log("Error in Creating product:", error.message);
        res.status(500).json({succes: false, message:'Server error'});
    }
})

app.listen(5000, ()=>{
    connectDB();
    console.log("Server start at local host 1")
})



// 