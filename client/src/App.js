import React, { Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createGlobalStyle } from 'styled-components';
import { ToastContainer } from 'react-toastify';

import { getTeams } from './actions/teams';
import { Router } from './routes';

const GlobalStyles = createGlobalStyle`
  body {
    @import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap');
    font-family: "Roboto", Arial, sans-serif;
  }

  h1, h2, h3, h4, h5, h6 {
    @import url('https://fonts.googleapis.com/css?family=Ubuntu:300,400,500,700&display=swap');
    font-family: 'Ubuntu', Arial, sans-serif;
  }
`;

function App() {
  const dispatch = useDispatch();
  const token = useSelector(state => state.auth.token);

  if (token) {
    dispatch(getTeams());
  }

  return (
    <Fragment>
      <ToastContainer />
      <GlobalStyles />
      <Router />
    </Fragment>
  );
}

export default App;
