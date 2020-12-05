
import React, { useState } from 'react';
import MissionTasks from '../MissionTasks/MissionTasks';
import { connect } from 'react-redux';

const Mission = (props) => {

  const [missionTraitors, setMissionTraitors] = useState([]);
  console.log(props)

  return (
    <div>
      <button>Begin Mission</button>
      <MissionTasks missionId={props.joinedMissionId} />
    </div>
  )
}

const mapStateToProps = reduxState => reduxState
export default connect(mapStateToProps)(Mission);


  // let playerList = ['Jake','Kate','Rya','Derek','Kari','Madi','Sara','Olivia','Klark','Harrison','Trevor'];

  // console.log(playerList[Math.floor(Math.random() * playerList.length)])

  // let random = Math.random()
  // console.log(random, playerList.length)
  // console.log(random * playerList.length)

