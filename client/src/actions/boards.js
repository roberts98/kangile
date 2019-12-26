import { createTaskRequest } from '../services/boards.service';
import {
  TEAMS_REQUESTED,
  TASK_CREATE_SUCCESS,
  TASK_CREATE_FAILURE
} from '../contants/teamsStore';

export const createTask = (boardId, data) => {
  return async (dispatch, getState) => {
    const { token } = getState().auth.user;

    function onSuccess(data) {
      dispatch({ type: TASK_CREATE_SUCCESS, payload: data });
    }

    function onError(error) {
      dispatch({ type: TASK_CREATE_FAILURE, payload: error });
    }

    dispatch({
      type: TEAMS_REQUESTED
    });

    try {
      const res = await createTaskRequest(token, boardId, data);
      return onSuccess(res.data);
    } catch (error) {
      return onError(error.response);
    }
  };
};
