import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import {
  loadingBarReducer,
  loadingBarMiddleware
} from 'react-redux-loading-bar';

import authReducer from '../reducers/authReducer';
import teamsReducer from '../reducers/teamsReducer';
import filtersReducer from '../reducers/filtersReducer';

export default () => {
  const store = createStore(
    combineReducers({
      auth: authReducer,
      teams: teamsReducer,
      filters: filtersReducer,
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
