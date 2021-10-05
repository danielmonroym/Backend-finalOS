const express = require('express');

const app = express();
const userRouter = require('./users/router/users.router');

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'It works!!!' });
});

app.use('/api/users', userRouter);
module.exports = app;