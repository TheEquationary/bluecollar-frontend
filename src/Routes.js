import React from 'react';
import {Router, Route, Switch} from "react-router-dom";
import history from './history';

// pages
import Home from './pages/home/Home';
import Login from './pages/login/Login';

const Routes = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
      </Switch>
    </Router>
  )
}

export default Routes;