import axios from 'axios';

export async function getUserTeams(token) {
  return axios('/teams', {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
}

export async function createTeamRequest(token, name) {
  return axios('/teams', {
    method: 'POST',
    data: {
      name
    },
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
}
