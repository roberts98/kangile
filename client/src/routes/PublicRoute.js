import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

function PrivateRoute({ component: Component, ...rest }) {
  const isAuthenticated = useSelector(state => state.auth.token);
  return (
    <Route {...rest}>
      {!isAuthenticated ? <Component {...rest} /> : <Redirect to="/user" />}
    </Route>
  );
}

export default PrivateRoute;
