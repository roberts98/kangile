const express = require('express');
const http = require('http');

require('./db/mongoose');
const userRouter = require('./routes/user');
const teamRouter = require('./routes/team');
const boardRouter = require('./routes/board');
const timeoutMiddleware = require('./middlewares/timeout');
const Socket = require('./socket/Socket');

const app = express();
const server = http.createServer(app);
const socket = new Socket(server);
const port = process.env.PORT || 3001;

// app.use(timeoutMiddleware);
app.use(express.json());
app.use('/users', userRouter);
app.use('/teams', teamRouter);
app.use('/boards', boardRouter);

socket.run();

server.listen(port, () => {
  console.log('Server started on port: ' + port);
});
