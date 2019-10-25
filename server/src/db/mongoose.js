const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/kangile', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false
});
