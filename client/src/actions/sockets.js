import { SET_SOCKET } from '../contants/socketStore';

export const setSocket = socket => ({
  type: SET_SOCKET,
  payload: socket
});
