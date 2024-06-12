import mongoose from "mongoose";
import {DB_NAME} from './constants.js';
import express from 'express';
import dotenv from 'dotenv';

dotenv.config()
const app = express();

(async () => {
   await mongoose.connect(`${process.env.MONGO_DB_URL}/${DB_NAME}`).then((resp) => {
    app.get('/test', (req, res) => {
        res.send('Hi');
    })
    
    app.listen(process.env.PORT || 3000, () => {
        console.log(`App is listening on port ${process.env.PORT}`);
    })
        console.log(`connected to mongodb`);
    }).catch((err) => {
        console.log(`Opps, Mongodb not connected ${err?.message}`);
        throw err
    })
})()
