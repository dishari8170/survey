import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
    title: String,
    intro: String,
    data: String,
})

const CourseDB = mongoose.models.CourseDB || mongoose.model("CourseDB", taskSchema);

export default CourseDB;
