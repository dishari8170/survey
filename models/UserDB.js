import mongoose from "mongoose";

const homesliderSchema = new mongoose.Schema(
    {
        code:{
            type:String,
            default:()=>{
               return  Date.now().toString(36).toUpperCase()
            }
        },

        trn:[
            mongoose.Schema.Types.ObjectId

        ],



        name: {
            type: String,
            default: '' // You can set a default value if needed
        },
        email: {
            type: String,
            default: ''
        },
        phone: {
            type: String,
            default: ''
        },
        country: {
            type: String,
            default: ''
        },
        state: {
            type: String,
            default: ''
        },
        pincode: {
            type: String,
            default: ''
        }
        ,

        otp: Number,

    },
    {
        timestamps:true,
    }

);

const Usr= mongoose.models.UserDB || mongoose.model("UserDB", homesliderSchema);

export default Usr;