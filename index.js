import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose'
import { adminroute } from './Routes/adminroute.js';
const app=express();
dotenv.config();
app.use(express.json());
app.listen(process.env.PORT,()=>{
    console.log(`Server is listening at PORT ${process.env.PORT}`);
});
app.use('/',adminroute)
mongoose.connect('mongodb://localhost:27017/StudentEnrollmentSystem').then(()=>{
        console.log('Mongodb DATABASE Connection Successfull');
     })
    .catch((error)=>{
          console.error('DATABASE Connection Failed',error);
     });


