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
