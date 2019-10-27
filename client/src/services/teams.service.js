import axios from 'axios';

export async function getUserTeams(token) {
  return axios('/teams', {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
}

export async function getUserTeam(token, id) {
  return axios(`/teams/${id}`, {
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

export async function updateTeamBoardsOrderRequest(token, id, boards) {
  return axios(`/teams/${id}/boardsOrder`, {
    method: 'PATCH',
    data: {
      boards
    },
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
}
