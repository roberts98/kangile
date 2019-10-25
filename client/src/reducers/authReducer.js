import {
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAILURE
} from '../contants/authStore';

const initialState = {
  isLoading: false,
  user: null,
  error: null
};

function authReducer(state = initialState, action) {
  switch (action.type) {
    case REGISTER_REQUEST:
      return {
        ...state,
        isLoading: true
      };

    case REGISTER_SUCCESS:
      return {
        ...state,
        user: action.payload,
        isLoading: false
      };

    case REGISTER_FAILURE:
      return {
        ...state,
        error: action.payload,
        isLoading: false
      };

    default:
      return { ...state };
  }
}

export default authReducer;
