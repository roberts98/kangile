import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import history from './history';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import LoginPage from '../pages/public/LoginPage';
import HomePage from '../pages/public/HomePage';
import Dashboard from '../pages/public/Dashboard';

function PageRouter() {
  return (
    <Router history={history}>
      <ToastContainer />
      <Switch>
        <PrivateRoute path="/user" component={Dashboard} />
        <PublicRoute path="/login" component={LoginPage} />
        <PublicRoute path="/" component={HomePage} />
      </Switch>
    </Router>
  );
}

export default PageRouter;
