import React, { Fragment, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createGlobalStyle } from 'styled-components';
import { ToastContainer } from 'react-toastify';

import Router from './routes/Router';
import { getTeams } from './actions/teams';
import FullSpinner from './components/spinners/FullSpinner';

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
  const {
    teams: { teams, isLoading },
    auth: { token }
  } = useSelector(state => state);

  useEffect(() => {
    if (teams === null && token) {
      dispatch(getTeams());
    }
  }, [teams, dispatch, token]);

  return (
    <Fragment>
      <ToastContainer />
      <GlobalStyles />
      {!token ? <Router /> : isLoading ? <FullSpinner /> : <Router />}
    </Fragment>
  );
}

export default App;
