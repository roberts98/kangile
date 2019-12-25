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

const initialState = {
  isLoading: false,
  user: {
    token: window.localStorage.getItem('token') || null
  },
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
        user: action.payload,
        isLoading: false
      };

    case REGISTER_FAILURE:
    case LOGIN_FAILURE:
      console.log('x');
      return {
        ...state,
        error: action.payload,
        isLoading: false
      };

    case LOGOUT:
      return {
        ...state,
        user: {
          token: null
        }
      };

    default:
      return { ...state };
  }
}

export default authReducer;
