import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import RegisterPage from '../pages/RegisterPage';

function Router() {
  return (
    <BrowserRouter>
      <ToastContainer />
      <Switch>
        <Route path="/register">
          <RegisterPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
