import {
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  CLEAR_ERRORS,
  LOGOUT
} from '../contants/authStore';
import history from '../routes/history';
import { userRegister, userLogin } from '../services/user.service';

function storeJWT(token) {
  window.localStorage.setItem('token', token);
}

export function getJWT() {
  return window.localStorage.getItem('token');
}

function removeJWT() {
  window.localStorage.removeItem('token');
}

export const clearErrors = () => {
  return dispatch => {
    dispatch({ type: CLEAR_ERRORS });
  };
};

export const register = (username, email, password) => {
  return async dispatch => {
    function onSuccess(user) {
      dispatch({ type: REGISTER_SUCCESS, payload: user.data });
      history.push('/user');
      storeJWT(user.data.token);
    }

    function onError(error) {
      dispatch({ type: REGISTER_FAILURE, payload: error.data.error.errmsg });
    }

    dispatch({
      type: REGISTER_REQUEST
    });

    try {
      const res = await userRegister(username, email, password);
      return onSuccess(res);
    } catch (error) {
      return onError(error.response);
    }
  };
};

export const login = (email, password) => {
  return async dispatch => {
    function onSuccess(user) {
      dispatch({ type: LOGIN_SUCCESS, payload: user.data });
      history.push('/user');
      storeJWT(user.data.token);
    }

    function onError(error) {
      dispatch({ type: LOGIN_FAILURE, payload: error });
    }

    dispatch({
      type: LOGIN_REQUEST
    });

    try {
      const res = await userLogin(email, password);
      return onSuccess(res);
    } catch (error) {
      return onError(error.response);
    }
  };
};

export const logout = () => {
  return dispatch => {
    removeJWT();
    dispatch({ type: LOGOUT });
  };
};
