
import axios from 'axios';
import React, { useState, useEffect } from 'react';


const MissionTasks = (props) => {
  const [tasks, setTasks] = useState([]);
  const [taskTitle, setTaskTitle] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [comradesNeeded, setComradesNeeded] = useState(null);

  useEffect(() => {
    axios.get(`/api/mission/tasks/${props.missionId}`).then(res => {
      setTasks(res.data)
    })
  })

  const createMissionTask = () => {
    axios.post(`/api/mission/tasks/${props.missionId}`, { taskTitle, taskDescription, comradesNeeded }).then(res =>
      setTasks(res.data)
    )
  }

  return (
    <div>
      <button>Begin Mission</button>
      {tasks.map(e => {
        <div>{e.task_title}</div>
      })}

      <div>New Task</div>
      <input placeholder='Task Title' onChange={(e) => setTaskTitle(e.target.value)}></input>
      <input placeholder='Description (optional)' onChange={(e) => setTaskDescription(e.target.value)}></input>
      <input type='number' placeholder='Comrades Needed' onChange={(e) => setComradesNeeded(e.target.value)}></input>
      <button onClick={() => createMissionTask()}>Add Task</button>
    </div>
  )
}

export default MissionTasks;