// External imports
const express = require("express");
const router = express.Router();

const tasksController = require("../controllers/tasks.controller");

router.get("/tasks", tasksController.index ); // Listing
router.get("/tasks/create", tasksController.create );
router.post("/tasks", tasksController.store); // Action to create
router.get("/tasks/:id/edit", tasksController.edit); // Form page
router.post("/tasks/:id", tasksController.update); 
router.post("/tasks/:id/delete", tasksController.delete); //delete

module.exports = router;