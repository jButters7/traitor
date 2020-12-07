import React, { useState } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { joinMission } from '../../ducks/authReducer';

const Landing = (props) => {
  const [missionName, setMissionName] = useState('');
  const [secretCode, setSecretCode] = useState('');

  const createMission = () => {
    const { traitorUserId } = props
    axios.post('/api/mission/create', { missionName, secretCode, traitorUserId }).then(res => {
      props.joinMission(res.data.traitor_mission_id);
      props.history.push(`/mission/${res.data.traitor_mission_id}`)
    })
  }

  const joinMission = () => {
    axios.post('/api/mission/join', { missionName, secretCode }).then(res => {
      console.log(res.data)
      props.joinMission(res.data.traitor_mission_id);
      props.history.push(`/mission/${res.data.traitor_mission_id}`)
    })
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

const mapStateToProps = reduxState => reduxState

export default connect(mapStateToProps, { joinMission })(Landing);