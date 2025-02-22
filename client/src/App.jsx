import { useEffect, useState } from 'react'
import './App.css'
import AddTaskForm from './components/AddTaskForm'
import Header from './components/Header'
import TaskListItem from './components/TaskListItem'
import TimeCalculator from './components/TImeCalculator'
import { deleteTaskRequest, getTask, updateTaskType } from '../axios/taskAxios'
function App() {
  
  const[taskList,setTaskList] = useState([])

  const[totalEntryTime, setTotalEntryTime] =  useState('0')
  const[totalWastedTime, setTotalWastedTime] = useState('0')

  const entryTypeTask = taskList.filter(item => item.type === "Entry")
  
  const unwantedTypeTask = taskList.filter(item => item.type === "Unwanted")

  const fetchTasks = async() => {
    const response = await getTask()
    console.log("response array", response)
    if(response.status === "success")
    {
      setTaskList(response.data)
    }
    
  } 

  useEffect(()=>{
    // Initialize taskList state with data from database 
    // To fetch data using API we have to send request 
    fetchTasks()
  },[])

  
  // const switchTaskType = (taskId) => {
  //   const updatedTaskList  = taskList.map((task) => {
  //         if(task.id === taskId){
  //           task.type = task.type === "Entry" ? "Unwanted" : "entry"
  //         }
  //         return task
  //       })
  //       setTaskList(updatedTaskList)
  // }
     
  const switchTaskType = async(task) => {
    const updatedTaskType = task.type === 'Entry' ? 'Unwanted' : 'Entry'
    const response = await updateTaskType(task._id, { type: updatedTaskType})
      if(response.status === "success"){
        fetchTasks()
      }

  }
  

  // adding up the entry task time
useEffect(() => {
  let entryTime = 0;
  entryTypeTask.forEach((task) => {
    const taskTime = parseInt(task.taskTime, 10) || 0; // Parse with radix, handle NaN
    entryTime += taskTime;
  });
  setTotalEntryTime(entryTime);

  let wastedTime = 0;
  unwantedTypeTask.forEach((task) => { // Use unwantedTypeTask here
    const taskTime = parseInt(task.taskTime, 10) || 0; // Parse with radix, handle NaN
    wastedTime += taskTime;
  });
  setTotalWastedTime(wastedTime);
}, [taskList]); // Add taskList to the dependency array


// Delete | deleting tasks using their id
  const deleteTask = async(taskId) => {
  const response = await deleteTaskRequest(taskId)

    if(response.status === 'success')
    {
      fetchTasks()
    }
  }

  return (
    <>
          {/* <!----Title section--> */}
      <Header/>

      <section>
        {/* <!----Body Of Our Application-----> */}
        <div className="shadow-lg border p-4 rounded">
          {/* <!---First Row--> */}
          <div className="row gap-2">
            {/* <!--First Column--> */}
            <div className="col border p-4 rounded align-self-center">
              {/* <!--Form to collect user's input i.e task details--> */}
             <AddTaskForm fetchTasks={fetchTasks}/>
            </div>
            {/* <!--Second Column--> */}
            <div className="col border p-4 rounded">
              {/* <!---All Task List--> */}
              <h3 className="text-center">Entry Task List</h3>

              <div className="px-4" style={{height:"50vh", overflowY: "auto"}}>
                {/* <!---Table to display task list--> */}
                <table className="table table-hover border">
                  {/* <!---The table body content will be added by JS || adding rows from JS--> */}
                  <tbody>
                    {entryTypeTask.map(item => <TaskListItem 
                      key={item.id} 
                      task = {item} 
                      switchTaskType = {switchTaskType}
                      deleteTask = {deleteTask}/> )}
                  </tbody>
                </table>
              </div>
            </div>
            {/* <!--Third Column--> */}
            <div className="col border p-4 rounded">
              {/* <!---All Task List--> */}
              <h3 className="text-center">Unwanted Task List</h3>

              <div className="px-4" style={{height:"50vh", overflowY: "auto"}}>
                {/* <!---Table to display unwanted task list--> */}
                <table className="table table-hover border">
                  {/* <!---The table body content will be added by JS || adding rows from JS--> */}
                  <tbody>
                    {unwantedTypeTask.map(item => <TaskListItem 
                      key={item.id} 
                      task = {item} 
                      switchTaskType = {item.id}
                      deleteTask = {deleteTask}/> )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* <!---Second Row--> */}
          <TimeCalculator entryTime = {totalEntryTime}
                          unwantedTime = {totalWastedTime}/> 
          </div>
         
        </section>      
  
  </>
  )
}

export default App
