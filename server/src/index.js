const express = require('express');

require('./db/mongoose');
const userRouter = require('./routes/user');

const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());
app.use('/users', userRouter);

app.listen(port, () => {
  console.log('Server started on port: ' + port);
});
