import mongoose from "mongoose"

const userSchema= new mongoose.Schema({

    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique: true,
    },
    hashed_password:{
        type:String,
        required:true,
    },
    answer:{
        type:String,
        required:true,
    },
    referal_code:{
        type:String,
        required:true,
        unique:true
    },
    refered_user:[
        {
            id:{
                type:String,
            },
            name:{
                type:String,
            },
            email:{
                type:String,
            }
        }
    ],
    points:{
        type:Number,
        default:0
    },
    products:{
        type:mongoose.ObjectId,
        ref:"Product",
    }
    },
    { timestamps: true }
)
export default mongoose.model("user",userSchema);