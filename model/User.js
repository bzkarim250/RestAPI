import mongoose from "mongoose";
import emailValidator from 'email-validator';

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        minlength: 4,
        maxlength: 30,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true,
        validate: {
            validator: emailValidator.validate,
            message: '{VALUE} is not a valid email address'
        }
    },
    password: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        min: 18,
        max: 80,
        required: true
    }
},{timestamps:true});

const User = mongoose.model('User', userSchema);
export default User;
