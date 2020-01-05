import {
  TEAMS_FETCH_FAILURE,
  TEAMS_FETCH_SUCCESS,
  TEAMS_REQUEST_BAR,
  TEAM_CREATE_SUCCESS,
  TEAM_FETCH_SUCCESS,
  TEAM_BOARDS_ORDER_SUCCESS,
  TASK_CREATE_SUCCESS,
  TASK_REQUEST_BAR,
  TASK_DELETE_SUCCESS,
  TASK_BOARD_SUCCESS
} from '../contants/teamsStore';

const initialState = {
  teams: null,
  isLoading: true,
  activeTeam: {
    boards: [],
    members: []
  }
};

function teamsReducer(state = initialState, action) {
  let index = 0;

  switch (action.type) {
    case TEAMS_REQUEST_BAR:
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

    case TASK_REQUEST_BAR:
      return {
        ...state,
        loadingId: action.payload
      };

    case TASK_CREATE_SUCCESS:
      // eslint-disable-next-line
      state.activeTeam.boards.map((board, i) => {
        if (board._id === action.payload.board._id) {
          return (index = i);
        }
      });

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

    case TASK_DELETE_SUCCESS:
      // eslint-disable-next-line
      state.activeTeam.boards.map((board, i) => {
        if (board._id === action.payload.board._id) {
          return (index = i);
        }
      });

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

    case TASK_BOARD_SUCCESS:
      return {
        ...state,
        activeTeam: {
          ...state.activeTeam,
          boards: action.payload.boards
        }
      };

    default:
      return { ...state };
  }
}

export default teamsReducer;
