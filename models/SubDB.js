import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
    title: String,
    intro: String,
    data: String,
    category: String,
})

const SubDB = mongoose.models.SubDB || mongoose.model("SubDB", taskSchema);

export default SubDB;
