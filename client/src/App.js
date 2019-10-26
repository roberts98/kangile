import React from 'react';
import { Provider } from 'react-redux';
import { createGlobalStyle } from 'styled-components';

import Router from './routes/Router';
import configureStore from './store/createStore';

const store = configureStore();

const GlobalStyles = createGlobalStyle`
  body {
    @import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap');
    font-family: "Roboto", Arial, sans-serif;
  }

  h1, h2, h3, h4, h5, h6 {
    @import url('https://fonts.googleapis.com/css?family=Ubuntu:300,400,500&display=swap');
    font-family: 'Ubuntu', Arial, sans-serif;
  }
`;

function App() {
  return (
    <Provider store={store}>
      <GlobalStyles />
      <Router />
    </Provider>
  );
}

export default App;
