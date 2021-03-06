import axios from 'axios';

export async function createTaskRequest(token, boardId, data) {
  return axios(`/boards/${boardId}/newTask`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`
    },
    data
  });
}

export async function deleteTaskRequest(token, boardId, taskId) {
  return axios(`/boards/${boardId}/${taskId}`, {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${token}`
    },
    data: {
      taskId
    }
  });
}

export async function getTaskRequest(token, boardId, taskId) {
  return axios(`/boards/${boardId}/${taskId}`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
}

export async function updateTaskRequest(token, boardId, taskId, key, value) {
  return axios(`/boards/${boardId}/${taskId}`, {
    method: 'PATCH',
    headers: {
      Authorization: `Bearer ${token}`
    },
    data: {
      key,
      value
    }
  });
}

export async function updateTasksBoardRequest(token, teamId, boards) {
  return axios(`/teams/${teamId}/updateTasks`, {
    method: 'PATCH',
    headers: {
      Authorization: `Bearer ${token}`
    },
    data: {
      boards
    }
  });
}
