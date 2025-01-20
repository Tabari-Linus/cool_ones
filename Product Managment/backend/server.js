import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';

dotenv.config();

const app = express();

app.get('/', (req,res) =>{
    res.send("hello")
})

app.listen(5000, ()=>{
    connectDB();
    console.log("Server start at local host 1")
})



// 