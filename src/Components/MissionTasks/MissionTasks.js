
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Task from '../Task/Task';
import PlayersJoined from '../PlayersJoined/PlayersJoined';


const MissionTasks = (props) => {
  const [tasks, setTasks] = useState([]);
  const [taskTitle, setTaskTitle] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [comradesNeeded, setComradesNeeded] = useState(null);
  const [inputNewTask, setInputNewTask] = useState(false);
  const [isEditTask, setIsEditTask] = useState(false);


  useEffect(() => {
    axios.get(`/api/mission/tasks/${props.missionId}`).then(res => {
      setTasks(res.data);
    })
  })

  const createMissionTask = () => {
    axios.post(`/api/mission/tasks/${props.missionId}`, { taskTitle, taskDescription, comradesNeeded }).then(res => {
      setTasks(res.data);
      setTaskTitle('');
      setTaskDescription('');
      setComradesNeeded('');
      setInputNewTask(false);
    }
    ).catch(err => console.log(err.message));
  }

  const editTask = (taskId) => {
    axios.put(`/api/mission/tasks/${taskId}`, { taskTitle, taskDescription, comradesNeeded }).then(res => {
      setTasks(res.data);
      setTaskTitle('');
      setTaskDescription('');
      setComradesNeeded('');
    })
  };


  return (
    <div>
      {tasks.map(element => {
        return (
          <Task key={element.task_id} task={element} />
        )
      })}

      {inputNewTask ? <div>
        <div>New Task</div>
        <input placeholder='Task Title' onChange={(e) => setTaskTitle(e.target.value)} value={taskTitle}></input>
        <input placeholder='Description (optional)' onChange={(e) => setTaskDescription(e.target.value)} value={taskDescription}></input>
        <input type='number' placeholder='Comrades Needed' onChange={(e) => setComradesNeeded(e.target.value)} value={comradesNeeded}></input>
        <button onClick={() => createMissionTask()}>Add Task</button>
        <button onClick={() => setInputNewTask(false)}>Cancel</button>
      </div>
        :
        <button onClick={() => setInputNewTask(true)}>New Task</button>}

      <div>
        {console.log(props)}
        <PlayersJoined missionId={props.params.missionId} />
      </div>
    </div>
  )
}

export default MissionTasks;