

import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
    code:{
        type:String,
        default:()=>{
            return  Date.now().toString(36).toUpperCase()
        }
    },
    title:String,
    subtitle:String,
    count:Number,
    id:String,


})

const CodeDB = mongoose.models.CodeDB || mongoose.model("CodeDB", taskSchema);

export default CodeDB;
