import {
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAILURE
} from '../contants/authStore';
import { userRegister } from '../services/user.service';

export const register = (username, email, password) => {
  return async dispatch => {
    function onSuccess(user) {
      dispatch({ type: REGISTER_SUCCESS, payload: user });
    }

    function onError(error) {
      dispatch({ type: REGISTER_FAILURE, payload: error.data.error.errmsg });
    }

    dispatch({
      type: REGISTER_REQUEST
    });

    try {
      const res = await userRegister(username, email, password);
      console.log(res);
      return onSuccess(res);
    } catch (error) {
      return onError(error.response);
    }
  };
};
