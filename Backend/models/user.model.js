import mongoose from "mongoose";

const userschema = new mongoose.Schema({
    username : {
        require:true,
        type:String
    },
    number:{
        require:true,
        type:Number,
        unique:true
    },
    password:{
        require:true,
        type:String
    }
})

const User = mongoose.model.User || mongoose.model("User",userschema);

export default User;