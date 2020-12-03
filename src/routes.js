import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Login from './Components/Login/Login';
import Landing from './Components/Landing/Landing';

export default (
  <Switch>
    <Route exact path='/' component={Login} />
    <Route path='/landing' component={Landing} />
    <Route render={() => <Redirect to='/' />} />
  </Switch>
)