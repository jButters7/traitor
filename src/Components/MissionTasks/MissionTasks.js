
import axios from 'axios';
import React, { useState, useEffect } from 'react';


const MissionTasks = (props) => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axios.get(`/api/mission/tasks/${props.missionId}`).then(res => {
      setTasks(res.data)
    })
  })
  console.log(props.missionId)

  return (
    <div>
      <button>Begin Mission</button>
    </div>
  )
}

export default MissionTasks;