import { useState } from "react"
import { generateRandomId } from "../Utility/generateRandomId"

const AddTaskForm = (props) =>{

    const { setTaskList } = props
    const [taskName,setTaskName] = useState("")
    const [taskTime,setTaskTime] = useState("")

    const handleOnSubmit = (e) =>{
        e.preventDefault()

        const taskObject = {
            taskName: taskName,
            taskTime: taskTime,
            type: "entry",
            id: generateRandomId(),
        }
        setTaskList((prevState)=> [...prevState, taskObject])
        setTaskName("")
        setTaskTime("")
    }
    const  handleOnTaskNameChange = (e) =>{
        const inputValue = e.target.value
        setTaskName(inputValue)

    }

    const  handleOnTaskTimeChange = (e) =>{
        const inputValue = e.target.value
        setTaskTime(inputValue)

    }
       return(
        <>
         <form onSubmit={handleOnSubmit}>
                <div className="d-flex flex-column gap-4">
                  <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Enter task name"
                    name="taskName"
                    onChange ={handleOnTaskNameChange}
                    value={taskName}
                    required
                  />

                  <input 
                    type="number" 
                    className="form-control" 
                    placeholder="Enter time spent in hrs"
                    name="taskTime"
                    onChange ={handleOnTaskTimeChange}
                    value={taskTime}
                    min="1"
                    max="24"
                    required
                  />

                  <button 
                    className="btn btn-primary" 
                    type="submit"
                  >
                    Add Task
                  </button>
                </div>
              </form>
        </>
    )
}

export default AddTaskForm