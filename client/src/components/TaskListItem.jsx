const TaskListItem = (props) =>{
    const{ task, switchTaskType, deleteTask} = props
    
    // cosnt arrowClass = task.type === 'entry' ? 'fa-arrow-right-long fa-solid fa-sharp' : 'fa-arrow-left-long fa-solid fa-sharp'
    return(
        <tr>
                <td>{task.name}</td>
                <td>{task.timeToComplete}hrs</td>
                <td className="text-end">
                    <button className="btn btn-danger btn-sm" onClick= {() => deleteTask(task._id)}>
                    <i className="fa-trash fa-solid"></i>
                    </button>
                    {/* 
                    <button className="btn btn-success btn-sm" onClick="moveTaskToUnwantedTaskList('${task.id}')">
                    <i className="fa-arrow-right-long fa-solid fa-sharp"></i>
                    </button> */}

                    {/* Conditional rendering */}
                    {/* {Syntax : {condition && <condition/>}} */}

                    {task.type === 'Entry' && 
                        <button className="btn btn-success btn-sm" onClick={() => switchTaskType(task)}>
                        <i className="fa-arrow-right-long fa-solid fa-sharp"></i>
                        </button>
                    }

                    {task.type === 'Unwanted' && 
                        <button className="btn btn-success btn-sm" onClick={() => switchTaskType(task)}>
                        <i className="fa-arrow-left-long fa-solid fa-sharp"></i>
                        </button>
                    }
                </td>
        </tr>
    ) 
}

export default TaskListItem