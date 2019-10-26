import {
  TEAMS_FETCH_FAILURE,
  TEAMS_FETCH_SUCCESS,
  TEAMS_REQUESTED,
  TEAM_CREATE_FAILURE,
  TEAM_CREATE_SUCCESS
} from '../contants/teamsStore';
import { getUserTeams, createTeamRequest } from '../services/teams.service';
import history from '../routes/history';

export const getTeams = () => {
  return async (dispatch, getState) => {
    const { token } = getState().auth.user;

    function onSuccess(data) {
      dispatch({ type: TEAMS_FETCH_SUCCESS, payload: data });
    }

    function onError(error) {
      dispatch({ type: TEAMS_FETCH_FAILURE, payload: error });
    }

    dispatch({
      type: TEAMS_REQUESTED
    });

    try {
      const res = await getUserTeams(token);
      return onSuccess(res.data);
    } catch (error) {
      return onError(error.response);
    }
  };
};

export const createTeam = name => {
  return async (dispatch, getState) => {
    const { token } = getState().auth.user;

    function onSuccess(data) {
      dispatch({ type: TEAM_CREATE_SUCCESS, payload: data });
      history.push('/user');
    }

    function onError(error) {
      dispatch({ type: TEAM_CREATE_FAILURE, payload: error });
    }

    dispatch({
      type: TEAMS_REQUESTED
    });

    try {
      const res = await createTeamRequest(token, name);
      return onSuccess(res.data);
    } catch (error) {
      return onError(error.response);
    }
  };
};
