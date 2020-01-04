import {
  REGISTER_REQUEST_BAR,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  CLEAR_ERRORS,
  LOGIN_REQUEST_BAR,
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
  LOGOUT
} from '../contants/authStore';
import { getUserData } from '../actions/auth';

const initialState = {
  isLoading: false,
  ...getUserData(),
  error: null
};

function authReducer(state = initialState, action) {
  switch (action.type) {
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null
      };

    case REGISTER_REQUEST_BAR:
    case LOGIN_REQUEST_BAR:
      return {
        ...state,
        isLoading: true
      };

    case REGISTER_SUCCESS:
    case LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
        isLoading: false
      };

    case REGISTER_FAILURE:
    case LOGIN_FAILURE:
      return {
        ...state,
        error: action.payload,
        isLoading: false
      };

    case LOGOUT:
      return {
        ...state,
        token: null
      };

    default:
      return { ...state };
  }
}

export default authReducer;
