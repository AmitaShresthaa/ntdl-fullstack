// This file has functions to execute the queries
// CRUD operation -> Task resources 
import taskModel from "../schema/taskSchema.js";

// READ
export const getTasks = () => {
    return taskModel.find()
}

// Read One
export const getTask = (id) =>{
    return taskModel.findById(id)
}

// Create
export const createTask = (taskObject) => {
    return taskModel(taskObject).save()
}

// update
export const updateTask = (id, updateData) => {
    return taskModel.findByIdAndUpdate(id, updateData)
}

// Delete
export const deleteTask = (id) => {
    return taskModel.findByIdAndDelete(id)
}
