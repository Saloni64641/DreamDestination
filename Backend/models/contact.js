import mongoose from "mongoose";

const contactschema = new mongoose.Schema({
    name:{
        require:true,
        type:String
    },
    email:{
        require:true,
        unique:true,
        type:String
    },
    number:{
        require:true,
        type:String
    },
    message:{
        require:true,
        type: String,
    }
})

const Contact  = mongoose.model.Contact || mongoose.model("Contact",contactschema);

export default Contact;