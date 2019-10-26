import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import authReducer from '../reducers/authReducer';
import teamsReducer from '../reducers/teamsReducer';

export default () => {
  const store = createStore(
    combineReducers({
      auth: authReducer,
      teams: teamsReducer
    }),
    applyMiddleware(thunk)
  );

  return store;
};
