import io from 'socket.io-client';

const initialState = {
  io: io('http://localhost:3001/')
};

function socketReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return { ...state };
  }
}

export default socketReducer;
