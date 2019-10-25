const express = require('express');

const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());

app.get('/kangile', (req, res) => {
  res.send({ message: 'hello kangile!' });
});

app.listen(port, () => {
  console.log('Server started on port: ' + port);
});
