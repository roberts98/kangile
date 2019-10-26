import {
  TEAMS_FETCH_FAILURE,
  TEAMS_FETCH_SUCCESS,
  TEAMS_REQUESTED,
  TEAM_CREATE_SUCCESS,
  TEAM_FETCH_SUCCESS
} from '../contants/teamsStore';

const initialState = {
  teams: [],
  activeTeam: null
};

function teamsReducer(state = initialState, action) {
  switch (action.type) {
    case TEAMS_REQUESTED:
      return {
        ...state,
        isLoading: true
      };

    case TEAMS_FETCH_SUCCESS:
      return {
        ...state,
        teams: action.payload,
        isLoading: false
      };

    case TEAMS_FETCH_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };

    case TEAM_CREATE_SUCCESS:
      return { ...state, teams: [...state.teams, action.payload] };

    case TEAM_FETCH_SUCCESS:
      return { ...state, activeTeam: action.payload };

    default:
      return { ...state };
  }
}

export default teamsReducer;
