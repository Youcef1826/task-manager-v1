// External imports
const express = require("express");
const app = express();
const mongoose = require("mongoose");

const port = process.env.PORT || 3000; // Using the PORT environment variable or defaulting to port 3000.


// Internal imports
const tasksRoutes = require("./routes/tasks.routes");


// Set EJS
app.set("view engine", "ejs");


// Middleware for serving static files and parsing form data
app.use('/public', express.static('public'));
app.use(express.urlencoded({ extended: true }));


// MongoDB connection
mongoose.connect('mongodb://127.0.0.1:27017/task-manager');


// Routes
app.use(tasksRoutes);


// Handle 404 errors
app.use((req, res, next) => {
    res.status(404).send("Error 404 : Page not found !");
});


// Global error handler
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send("Something went wrong!");
});



// Start the server
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});