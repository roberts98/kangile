import React from 'react';
import { Router, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import history from './history';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import LoginPage from '../pages/public/LoginPage';
import HomePage from '../pages/public/HomePage';
import Dashboard from '../pages/private/Dashboard';
import CreateTeam from '../pages/private/CreateTeam';
import BoardsContainer from '../components/dashboard/boards/BoardsContainer';
import FullTask from '../components/dashboard/tasks/FullTask';

function PageRouter() {
  return (
    <Router history={history}>
      <ToastContainer />
      <Switch>
        <PrivateRoute path="/user/teams/create" exact component={CreateTeam} />
        <PrivateRoute
          path="/user/teams/:id"
          exact
          component={BoardsContainer}
        />
        <PrivateRoute
          path="/user/teams/:boardId/:taskId"
          component={FullTask}
        />
        <PrivateRoute path="/user" component={Dashboard} />
        <PublicRoute path="/login" component={LoginPage} />
        <PublicRoute path="/" component={HomePage} />
      </Switch>
    </Router>
  );
}

export default PageRouter;
