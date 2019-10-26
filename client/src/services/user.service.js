import axios from 'axios';

export async function userRegister(username, email, password) {
  return axios('/users', {
    method: 'POST',
    data: {
      username,
      email,
      password
    }
  });
}

export async function userLogin(email, password) {
  return axios('/users/login', {
    method: 'POST',
    data: {
      email,
      password
    }
  });
}
