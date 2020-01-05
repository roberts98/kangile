import { SET_TEXT_FILTER } from '../contants/filtersStore';

function filtersReducer(state = { searchTerm: '' }, action) {
  switch (action.type) {
    case SET_TEXT_FILTER:
      return {
        ...state,
        searchTerm: action.payload
      };

    default:
      return { ...state };
  }
}

export default filtersReducer;
