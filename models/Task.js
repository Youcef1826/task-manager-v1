const mongoose = require("mongoose");

const Task = mongoose.model("Task", {

    title: String,
    description: String,
    deadline: Date,
    project: String
});

module.exports = Task;