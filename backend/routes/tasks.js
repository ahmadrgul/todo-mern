const express = require("express")
const router = express.Router()

const Task = require("../models/Todo")

// returns the list of all tasks
router.get("/", async (req, res) => {
    try {
        const tasks = await Task.find()
        res.status(200).json(tasks)
    } catch (err) {
        res.status(500).json({ error: "Server error. Failed to fetch tasks."})
        console.log(err)
    }
})

// get a single task
router.get("/:id", async (req, res) => {
    try {
        const task = await Task.findById(req.params.id)

        if (!task) {
            res.status(404).json({ error: "Task not found."})
        }

        res.status(200).json(task)
    } catch (err) {
        res.status(500).json({ error: "Server error. Failed to fetch tasks."})
        console.log(err)
    }
})

// create a new task
router.post("/", async (req, res) => {
    try {
        const task = await Task.create(req.body)
        res.status(201).json(task)
    } catch (err) {
        res.status(500).json({ error: "Server error. Failed to create task."})
        console.log(err)
    }
})

// update an existing task
router.patch("/:id", async (req, res) => {
    try {
        const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body)
        
        if (!updatedTask) {
            res.status(404).json({ error: "Task not found."})
        }

        res.status(200).json(updatedTask)
    } catch (err) {
        res.status(500).json({ error: "Server error. Failed to update task."})
        console.log(err)
    }
})

// delete a task
router.delete("/:id", async (req, res) => {
    try {
        const deletedTask = await Task.findByIdAndDelete(req.params.id)
        
        if (!deletedTask) {
            res.status(404).json({ error: "Task not found."})
        }

        res.status(200).json({ message: "Task deleted successfuly."})
    } catch (err) {
        res.status(500).json({ error: "Server error. Failed to delete the task."})
        console.log(err)
    }
})

module.exports = router;