import {
  createTaskRequest,
  deleteTaskRequest
} from '../services/boards.service';
import {
  TASK_REQUESTED,
  TASK_CREATE_SUCCESS,
  TASK_CREATE_FAILURE,
  TASK_DELETE_FAILURE,
  TASK_DELETE_SUCCESS
} from '../contants/teamsStore';

export const createTask = (boardId, data) => {
  return async (dispatch, getState) => {
    const { token } = getState().auth;

    function onSuccess(data) {
      dispatch({ type: TASK_CREATE_SUCCESS, payload: data });
    }

    function onError(error) {
      dispatch({ type: TASK_CREATE_FAILURE, payload: error });
    }

    dispatch({
      type: TASK_REQUESTED,
      payload: boardId
    });

    try {
      const res = await createTaskRequest(token, boardId, data);
      return onSuccess(res.data);
    } catch (error) {
      return onError(error.response);
    }
  };
};

export const deleteTask = (boardId, taskId) => {
  return async (dispatch, getState) => {
    const { token } = getState().auth;

    function onSuccess(data) {
      dispatch({ type: TASK_DELETE_SUCCESS, payload: data });
    }

    function onError(error) {
      dispatch({ type: TASK_DELETE_FAILURE, payload: error });
    }

    dispatch({
      type: TASK_REQUESTED,
      payload: boardId
    });

    try {
      const res = await deleteTaskRequest(token, boardId, taskId);
      return onSuccess(res.data);
    } catch (error) {
      return onError(error.response);
    }
  };
};
