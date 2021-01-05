
import React, { useState, useEffect } from 'react';
import axios from 'axios';


const PlayersJoined = (props) => {
  const [playerList, setPlayerList] = useState([]);

  useEffect(() => {
    axios.get('/api/players/:missionId').then(res => {
      setPlayerList(res.data)
    })
  })



  return (
    <div>
      {playerList.map(player => {
        <div>{player.traitor_username}</div>
      })}
    </div>
  )
}

export default PlayersJoined;