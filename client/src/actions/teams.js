import {
  TEAMS_FETCH_FAILURE,
  TEAMS_FETCH_SUCCESS,
  TEAMS_REQUEST_BAR,
  TEAM_CREATE_FAILURE,
  TEAM_CREATE_SUCCESS,
  TEAM_FETCH_FAILURE,
  TEAM_FETCH_SUCCESS
} from '../contants/teamsStore';
import {
  getUserTeams,
  createTeamRequest,
  getUserTeam
} from '../services/teams.service';
import history from '../routes/history';

export const getTeams = () => {
  return async (dispatch, getState) => {
    const { token } = getState().auth;

    function onSuccess(data) {
      dispatch({ type: TEAMS_FETCH_SUCCESS, payload: data });
    }

    function onError(error) {
      dispatch({ type: TEAMS_FETCH_FAILURE, payload: error });
    }

    dispatch({
      type: TEAMS_REQUEST_BAR
    });

    try {
      const res = await getUserTeams(token);
      return onSuccess(res.data);
    } catch (error) {
      return onError(error.response);
    }
  };
};

export const getTeam = id => {
  return async (dispatch, getState) => {
    const { token } = getState().auth;

    function onSuccess(data) {
      dispatch({ type: TEAM_FETCH_SUCCESS, payload: data });
    }

    function onError(error) {
      dispatch({ type: TEAM_FETCH_FAILURE, payload: error });
    }

    dispatch({
      type: TEAMS_REQUEST_BAR
    });

    try {
      const res = await getUserTeam(token, id);
      return onSuccess(res.data);
    } catch (error) {
      return onError(error.response);
    }
  };
};

export const createTeam = (name, description) => {
  return async (dispatch, getState) => {
    const { token } = getState().auth;

    function onSuccess(data) {
      dispatch({ type: TEAM_CREATE_SUCCESS, payload: data.team });
      history.push('/user');
    }

    function onError(error) {
      dispatch({ type: TEAM_CREATE_FAILURE, payload: error });
    }

    dispatch({
      type: TEAMS_REQUEST_BAR
    });

    try {
      const res = await createTeamRequest(token, name, description);
      return onSuccess(res.data);
    } catch (error) {
      return onError(error.response);
    }
  };
};
