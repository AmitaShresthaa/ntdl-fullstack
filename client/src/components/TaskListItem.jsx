const TaskListItem = (props) =>{
    const{ task, switchTaskType, deleteTask} = props
    
    // cosnt arrowClass = task.type === 'entry' ? 'fa-arrow-right-long fa-solid fa-sharp' : 'fa-arrow-left-long fa-solid fa-sharp'
    return(
        <tr>
                <td>{task.taskName}</td>
                <td>{task.taskTime}hrs</td>
                <td className="text-end">
                    <button className="btn btn-danger btn-sm" onClick= {() => deleteTask(task.id)}>
                    <i className="fa-trash fa-solid"></i>
                    </button>
{/* 
                    <button className="btn btn-success btn-sm" onClick="moveTaskToUnwantedTaskList('${task.id}')">
                    <i className="fa-arrow-right-long fa-solid fa-sharp"></i>
                    </button> */}

                    {/* Conditional rendering */}
                    {/* {Syntax : {condition && <condition/>}} */}

                    {task.type === 'entry' && 
                        <button className="btn btn-success btn-sm" onClick={() => switchTaskType(task.id)}>
                        <i className="fa-arrow-right-long fa-solid fa-sharp"></i>
                        </button>
                    }

                    {task.type === 'unwanted' && 
                        <button className="btn btn-success btn-sm" onClick={() => switchTaskType(task.id)}>
                        <i className="fa-arrow-left-long fa-solid fa-sharp"></i>
                        </button>
                    }
                </td>
    </tr>
    )
    
}

export default TaskListItem