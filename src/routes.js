import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Login from './Components/Login/Login';
import Landing from './Components/Landing/Landing';
import Register from './Components/Register/Register';
import Mission from './Components/Mission/Mission';

export default (
  <Switch>
    <Route exact path='/' component={Login} />
    <Route path='/landing' component={Landing} />
    <Route path='/register' component={Register} />
    <Route path='/mission/:missionId' component={Mission} />
    <Route render={() => <Redirect to='/' />} />
  </Switch>
)