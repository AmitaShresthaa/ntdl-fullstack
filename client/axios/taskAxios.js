// This file sends api request for task resource 
import axios from 'axios'

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL
const TASK_ENDPOINT = '/api/tasks'

// FRONTEND CRUD OPERATIONS
//sending Request

// GET | Get all task 
export const getTask = () => {
    const response = axios.get(API_BASE_URL + TASK_ENDPOINT)
                          .then( res => res.data)
                          .catch(error => error)
    return response
}
// Create a task

export const createTask = (taskObject) => {
    const response = axios.post(API_BASE_URL + TASK_ENDPOINT, taskObject)
                            .then(res => res.data)
                            .catch(error => error)
    return response;

}

// DELETE | Delete task
export const deleteTaskRequest = (id) => {
    const response = axios.delete(API_BASE_URL + TASK_ENDPOINT + `/${id}`)
                         .then(res => res.data)
                         .catch(error => error)
    return response;
}

export const updateTaskType = (id, newType) => {
    const response = axios.patch(API_BASE_URL + TASK_ENDPOINT + `/${id}`, newType)
                         .then(res => res.data)
                         .catch(error => error)
    return response;
}

