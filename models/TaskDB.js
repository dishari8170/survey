import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
    task: String,
    priority: String,
    data: String,
    day: String,
})

const TaskDB = mongoose.models.TaskDB || mongoose.model("TaskDB", taskSchema);

export default TaskDB;
