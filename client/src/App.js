import React from 'react';
import { Provider } from 'react-redux';

import Router from './routes/Router';
import configureStore from './store/createStore';

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
}

export default App;
