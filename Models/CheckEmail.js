import mongoose from "mongoose";

const CheckEmail=new mongoose.Schema({
    email:{
        type:String,
        unique:true,
    }
})
export default mongoose.model("RepeatEmailCheck",CheckEmail);