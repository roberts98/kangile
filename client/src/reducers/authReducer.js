import {
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  CLEAR_ERRORS,
  LOGIN_REQUEST,
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
    case REGISTER_REQUEST:
    case LOGIN_REQUEST:
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
