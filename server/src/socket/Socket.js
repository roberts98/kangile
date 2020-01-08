const socket = require('socket.io');

class Socket {
  constructor(server) {
    this.io = socket(server);
  }

  run() {
    this.io.on('connection', socket => {
      console.log('connected');

      socket.on('CONNECTED', data => console.log(data));
    });
  }
}

module.exports = Socket;
