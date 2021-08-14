import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    email : {
        type : String,
        required : true
    },
    password : {
        type : String,
        minlength : 10
    }
});

export const user = mongoose.model('user',userSchema);