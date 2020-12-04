import React, { useState } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { loginUser } from '../../ducks/authReducer';

const Login = (props) => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const login = () => {
    axios.post('/auth/login', { username, password }).then(res => {
      props.loginUser(res.data.traitor_users_id, res.data.traitor_username, res.data.player_role);
      props.history.push('/landing')
    })
  }

  return (
    <div>
      <input placeholder='username' onChange={(e) => setUsername(e.target.value)}></input>
      <input placeholder='password' type='password' onChange={(e) => setPassword(e.target.value)}></input>
      <button onClick={() => login()}>Login</button>
      <button onClick={() => props.history.push('/register')}>Register Here</button>
    </div>
  )
}

export default connect(null, { loginUser })(Login);