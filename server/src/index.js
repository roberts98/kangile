const express = require('express');

require('./db/mongoose');
const userRouter = require('./routes/user');
const teamRouter = require('./routes/team');
const boardRouter = require('./routes/board');
const timeoutMiddleware = require('./middlewares/timeout');

const app = express();
const port = process.env.PORT || 3001;

app.use(timeoutMiddleware);
app.use(express.json());
app.use('/users', userRouter);
app.use('/teams', teamRouter);
app.use('/boards', boardRouter);

app.listen(port, () => {
  console.log('Server started on port: ' + port);
});
