import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const login = (props) => {
    axios.post('/auth/login', { username, password }).then(res => {
      console.log(res.data)
    })
  }

  return (
    <div>
      <input placeholder='username' onChange={(e) => setUsername(e.target.value)}></input>
      <input placeholder='password' type='password' onChange={(e) => setPassword(e.target.value)}></input>
      <button onClick={() => login()}>Login</button>
    </div>
  )
}

export default Login;