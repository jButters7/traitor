import React, { useState } from 'react';
import axios from 'axios';

const Register = (props) => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const register = () => {
    axios.post('/auth/register', { username, password }).then((res) => {
      console.log(res.data)
      props.history.push('/')
    })
  }

  return (
    <div>
      <input placeholder='username' onChange={(e) => setUsername(e.target.value)}></input>
      <input placeholder='password' type='password' onChange={(e) => setPassword(e.target.value)}></input>
      <button onClick={() => register()}>Register</button>
    </div>
  )
}

export default Register;