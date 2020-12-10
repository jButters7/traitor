
import React, { useState, useEffect } from 'react';
import axios from 'axios';


const Task = (props) => {
  const [taskTitle, setTaskTitle] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [comradesNeeded, setComradesNeeded] = useState(null);
  const [isEditTask, setIsEditTask] = useState(false);

  const editTask = (taskId) => {
    axios.put(`/api/mission/tasks/${taskId}`, { taskTitle, taskDescription, comradesNeeded }).then(res => {
      setTaskTitle('');
      setTaskDescription('');
      setComradesNeeded('');
    })
  };


  return (
    <div>
      {!isEditTask ?
        <div>
          <div>{props.task.task_title}</div>
          <div>{props.task.task_description}</div>
          <div>{props.task.comrades_needed}</div>
          <button onClick={() => setIsEditTask(true)}>Edit</button>
          <button>Delete</button>
        </div>
        :
        <div>
          <input onChange={(e) => setTaskTitle(e.target.value)} value={props.task.task_title}></input>
          <input onChange={(e) => setTaskDescription(e.target.value)} value={props.task.task_description}></input>
          <input onChange={(e) => setComradesNeeded(e.target.value)} value={props.task.comrades_needed}></input>
          <button onClick={() => editTask(props.task.task_id)}>Save</button>
          <button onClick={() => setIsEditTask(false)}>Cancel</button>
        </div>
      }
    </div>
  )
}

export default Task;