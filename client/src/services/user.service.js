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
