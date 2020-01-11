import React from 'react';
import { Router, Switch } from 'react-router-dom';

import { history, PrivateRoute, PublicRoute } from './';
import { HomePage, LoginPage, RegisterPage } from '../pages/public';
import {
  CreateTeamPage,
  DashboardPage,
  FullTaskPage,
  ChatPage,
  TeamPage
} from '../pages/private';

function PageRouter() {
  return (
    <Router history={history}>
      <Switch>
        <PrivateRoute
          path="/user/teams/create"
          exact
          component={CreateTeamPage}
        />
        <PrivateRoute path="/user/teams/:id" exact component={TeamPage} />
        <PrivateRoute
          path="/user/teams/:boardId/:taskId"
          component={FullTaskPage}
        />
        <PrivateRoute path="/user/chat/:teamId" component={ChatPage} />
        <PrivateRoute path="/user" component={DashboardPage} />
        <PublicRoute path="/login" component={LoginPage} />
        <PublicRoute path="/register" component={RegisterPage} />
        <PublicRoute path="/" component={HomePage} />
      </Switch>
    </Router>
  );
}

export default PageRouter;
