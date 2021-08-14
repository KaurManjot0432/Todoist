import mongoose from "mongoose";
import bcrypt from "bcryptjs";

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

userSchema.pre('save',function(next){
    bcrypt.hash(this.password,8,(err,hash)=> {
        if(err){
            return next(err);
        }
        this.password = hash;
        next();
    })
});

userSchema.methods.validatePassword = function(password){
    const passHash =  this.password;
    return new Promise((resolve,reject) => {
        bcrypt.compare(passHash,password,(err,res)=>{
            if(err) return reject(err);
            resolve(res); 
        })
    })
}

export const user = mongoose.model('user',userSchema);