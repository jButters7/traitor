import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const login = () => {
    axios.post('/')
  }

  return (
    <div>
      <input placeholder='username' onChange={(e) => setUsername(e.target.value)}></input>
      <input placeholder='password' onChange={(e) => setPassword(e.target.value)}></input>
      <button onClick={() => login()}>Login</button>
    </div>
  )
}

export default Login;