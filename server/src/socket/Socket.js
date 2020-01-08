const socket = require('socket.io');

const {
  CONNECTED,
  MESSAGE_SENT,
  MESSAGE_RECEIVED
} = require('../constants/sockets');

class Socket {
  constructor(server) {
    this.io = socket(server);
  }

  run() {
    this.io.on('connection', socket => {
      socket.on(CONNECTED, data => {
        socket.join(data.teamId);
      });

      socket.on(MESSAGE_SENT, data => {
        socket.broadcast
          .to(data.teamId)
          .emit(MESSAGE_RECEIVED, { message: data.message });
      });
    });
  }
}

module.exports = Socket;
