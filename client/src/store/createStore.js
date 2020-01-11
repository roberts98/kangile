import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import {
  loadingBarReducer,
  loadingBarMiddleware
} from 'react-redux-loading-bar';

import {
  authReducer,
  teamsReducer,
  filtersReducer,
  socketReducer
} from '../reducers';

export default () => {
  const store = createStore(
    combineReducers({
      auth: authReducer,
      teams: teamsReducer,
      filters: filtersReducer,
      socket: socketReducer,
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
