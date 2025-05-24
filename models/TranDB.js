import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
    title: String,
    id: String,
    user: String,
    intro: String,
    video: String,
    time: String,
    task:String,
    taskp:String,
    taskp:String,

    point:Number,
    category:String
})

const TranDB = mongoose.models.TranDB || mongoose.model("TranDB", taskSchema);

export default TranDB;
