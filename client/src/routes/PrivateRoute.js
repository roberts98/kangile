import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

function PrivateRoute({ component: Component, ...rest }) {
  const isAuthenticated = useSelector(state => state.auth.user.token);
  return (
    <Route {...rest}>
      {isAuthenticated ? <Component {...rest} /> : <Redirect to="/" />}
    </Route>
  );
}

export default PrivateRoute;
