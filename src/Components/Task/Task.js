
import React, { useState, useEffect } from 'react';
import axios from 'axios';


const Task = (props) => {
  const [taskTitle, setTaskTitle] = useState(props.task.task_title);
  const [taskDescription, setTaskDescription] = useState(props.task.task_description);
  const [comradesNeeded, setComradesNeeded] = useState(props.task.comrades_needed);
  const [isEditTask, setIsEditTask] = useState(false);

  const editTask = (taskId) => {
    axios.put(`/api/mission/tasks/${taskId}`, { taskTitle, taskDescription, comradesNeeded }).then(res => {
      setTaskTitle('');
      setTaskDescription('');
      setComradesNeeded('');
    })
  };

  const deleteMissionTask = (taskId) => {
    axios.delete(`/api/mission/tasks/${taskId}`).then(res => {
      console.log(res.status)
    })
  }

  return (
    <div>
      {!isEditTask ?
        <div>
          <div>{props.task.task_title}</div>
          <div>{props.task.task_description}</div>
          <div>{props.task.comrades_needed}</div>
          <button onClick={() => setIsEditTask(true)}>Edit</button>
          <button onClick={() => deleteMissionTask(props.task.task_id)}>Delete</button>
        </div>
        :
        <div>
          <input onChange={(e) => setTaskTitle(e.target.value)} value={taskTitle}></input>
          <input onChange={(e) => setTaskDescription(e.target.value)} value={taskDescription}></input>
          <input value={comradesNeeded} onChange={(e) => setComradesNeeded(e.target.value)}></input>
          <button onClick={() => editTask(props.task.task_id)}>Save</button>
          <button onClick={() => setIsEditTask(false)}>Cancel</button>
        </div>
      }
    </div>
  )
}

export default Task;