import React, { useState } from 'react';
import axios from 'axios';

const Landing = () => {

  const [missionName, setMissionName] = useState('');
  const [secretCode, setSecretCode] = useState('');

  const createMission = () => {
    axios.post('/api/mission', { missionName, secretCode })
    console.log(missionName, secretCode)
  }

  const joinMission = () => {
    console.log(missionName, secretCode)
  }

  return (
    <div>
      <div>
        <div>Join Mission</div>
        <input placeholder="Mission Name" onChange={(e) => setMissionName(e.target.value)}></input>
        <input placeholder="Create Secret Code" onChange={(e) => setSecretCode(e.target.value)}></input>
        <button onClick={() => joinMission()}>Join Mission</button>
      </div>


      <div>
        <div>Create Mission</div>
        <input placeholder="Mission Name" onChange={(e) => setMissionName(e.target.value)}></input>
        <input placeholder="Create Secret Code" onChange={(e) => setSecretCode(e.target.value)}></input>
        <button onClick={() => createMission()}>Create Mission</button>


      </div>
    </div>
  )
}

export default Landing;