import {
  TEAMS_FETCH_FAILURE,
  TEAMS_FETCH_SUCCESS,
  TEAMS_REQUESTED,
  TEAM_CREATE_SUCCESS,
  TEAM_FETCH_SUCCESS,
  TEAM_BOARDS_ORDER_SUCCESS,
  TASK_CREATE_FAILURE,
  TASK_CREATE_SUCCESS,
  TASK_REQUESTED
} from '../contants/teamsStore';

const initialState = {
  teams: [],
  activeTeam: {
    boards: []
  }
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
      return {
        ...state,
        isLoading: false,
        teams: [...state.teams, action.payload]
      };

    case TEAM_FETCH_SUCCESS:
      return { ...state, isLoading: false, activeTeam: action.payload };

    case TEAM_BOARDS_ORDER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        activeTeam: { ...state.activeTeam, boards: action.payload }
      };

    case TASK_REQUESTED:
      return {
        ...state,
        loadingId: action.payload
      };

    case TASK_CREATE_SUCCESS:
      const modifiedBoard = state.activeTeam.boards.filter(
        board => board._id === action.payload.board._id
      )[0];
      const index = state.activeTeam.boards.indexOf(modifiedBoard);

      return {
        ...state,
        loadingId: null,
        activeTeam: {
          ...state.activeTeam,
          boards: state.activeTeam.boards.map((board, i) =>
            i === index ? action.payload.board : board
          )
        }
      };

    default:
      return { ...state };
  }
}

export default teamsReducer;
