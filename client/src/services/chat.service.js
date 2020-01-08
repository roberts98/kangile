import axios from 'axios';

export async function getMessagesRequest(token, teamId) {
  return axios(`/teams/${teamId}/message`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
}

export async function postMessagesRequest(token, teamId, message) {
  return axios(`/teams/${teamId}/message`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`
    },
    data: {
      message
    }
  });
}
