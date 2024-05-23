// External imports
const Task = require("../models/Task");


// Index - list all tasks
exports.index = async (req, res) => {
    
    try {
        
        // Fetching all tasks from the "tasks" collection
        const tasks = await Task.find();
        
        res.render("tasks/index", { tasks });

    } catch (error) {
        console.error("Error fetching tasks:", error);
        res.status(500).send("Internal Server Error");
    }
};



// Create new task page
exports.create = (req, res) => {

    res.render("tasks/create");
};



// Add new task in tasks collection
exports.store = async (req, res) => {

    try {

        // Insert new task on the "tasks" collection
        const { title, description, deadline, project } = req.body;
        
        await Task.create({ title, description, deadline, project });

        res.redirect("/tasks");

    } catch (error) {
        console.error("Error adding task:", error);
        res.status(500).send("Internal Server Error");
    }
};



// Display task informations
exports.edit = async (req, res) => {

    try {

        const taskId = req.params.id;

        // Update task on the "tasks" collection
        const task = await Task.findById( taskId );

        res.render("tasks/edit", { task });
        
    } catch (error) {
        console.error("Error edit task account:", error);
        res.status(500).send("Internal Server Error");
    }
};



// Update task account
exports.update = async (req, res) => {

    try {
        
        // Update task account on the "tasks" collection
        const taskId = req.params.id;
        const { title, description, deadline, project } = req.body;
        
        await Task.findByIdAndUpdate(taskId, { title, description, deadline, project });

        res.redirect("/tasks");

    } catch (error) {
        console.error("Error adding task:", error);
        res.status(500).send("Internal Server Error");
    }
};

// Delete task
exports.delete = async (req, res) => {

    try {
      
        // Delete task account on the "tasks" collection
        const taskId = req.params.id;
        await Task.findByIdAndDelete(taskId);

        res.redirect("/tasks");

    } catch (error) {
        console.error("Error delete task:", error);
        res.status(500).send("Internal Server Error");
    };
};