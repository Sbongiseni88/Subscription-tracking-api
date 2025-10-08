import mongoose from 'mongoose';
import {DB_URL,NODE_ENV} from '../config/env.js';

if (!DB_URL) {
    throw new Error('DB_URL must be defined');
}

const connectDB= async() => {
    try{
        await mongoose.connect(DB_URL);
        console.log(`MongoDB connected successfully in ${NODE_ENV} mode.`);
    } catch(error){
        console.error('Error connecting to MongoDB:', error);
        process.exit(1); // Exit process with failure
    }
}

export default connectDB;