import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    title : {
        type : String,
        required : true
    },
    content : {
        type : String,
        minlength : 10
    },
    status : {
        type : String,
        enum : ['draft','under review','published'],
        default : 'draft'
    }
});

export const post = mongoose.model('post',postSchema);