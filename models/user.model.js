import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true,'Username is required'],
        unique: true,
        trim: true,
        minlength: [3,'Username must be at least 3 characters long'],
        maxlength: [30,'Username cannot exceed 30 characters']
    },
    email: {
        type: String,
        required: [true,'Email is required'],
        unique: true,
        trim: true,
        lowercase: true,
        match: [/.+\@.+\..+/,'Please fill a valid email address']
    },
    password: {
        type: String,
        required: [true,'Password is required'],
        minlength: [8,'Password must be at least 8 characters long'],
        select: false // Don't include password in the response
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const User = mongoose.model('User', userSchema);

export default User;

// This file defines the User model with fields for username, email, password, and createdAt.