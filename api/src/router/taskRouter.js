import express from "express"
import { createTask, deleteTask, getTask, getTasks, updateTask } from "../model/taskModel.js"

const taskRouter = express.Router()

// Index | Get Tasks
taskRouter.get("", (req, res) => {
    getTasks()
        .then(tasks => {
            res.json({
                status : "success",
                data: tasks
            })
        })
        .catch(error => {
            res.json({
                status: "error",
                error: error.message || "Could not fetch data"
            })

        })
})

// Show | Get Tasks
taskRouter.get("/:id", (req, res) => {
    getTask(req.params.id)
        .then(task => {
            res.json({
                status : "success",
                data: task
            })
        })
        .catch(error => {
            res.json({
                status: "error",
                error: error.message || "Could not fetch data"
            })
    
        })
})

// Create | POST Tasks
taskRouter.post("/", (req, res) => {
    const taskObject = req.body
    createTask(taskObject)
    .then(task => {
        res.json({
            status: "success",
            message: "Task created",
            dats: task
        })
    })
    .catch(error => {
        res.json({
            status: "error",
            error: error.message || "Could not fetch data"
        })
    })
})

// update | PATCH Tasks
taskRouter.patch("/:id", (req, res) => {
    const updatedTaskObject = req.body
    const id = req.params.id
    updateTask(id, updatedTaskObject)
    .then(task => {
        res.json({
            status: "success",
            message: "Task upated",
            dats: task
        })
    })
    .catch(error => {
        res.json({
            status: "error",
            error: error.message || "Could not fetch data"
        })
    })

})

// Delete | delete Tasks
taskRouter.delete("/:id", (req, res) => {
    deleteTask(req.params.id)
    .then(task => {
        res.json({
            status : "success",
            message : "Task deleted",
            data: task
        })
    })
    .catch(error => {
        res.json({
            status: "error",
            error: error.message || "Could not fetch data"
        })

    })
})

export default taskRouter