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
