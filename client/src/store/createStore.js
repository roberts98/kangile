import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import {
  loadingBarReducer,
  loadingBarMiddleware
} from 'react-redux-loading-bar';

import authReducer from '../reducers/authReducer';
import teamsReducer from '../reducers/teamsReducer';

export default () => {
  const store = createStore(
    combineReducers({
      auth: authReducer,
      teams: teamsReducer,
      loadingBar: loadingBarReducer
    }),
    applyMiddleware(
      thunk,
      loadingBarMiddleware({
        promiseTypeSuffixes: ['REQUEST_BAR', 'SUCCESS', 'FAILURE']
      })
    )
  );

  return store;
};
