const express = require('express');

const app = express();
const shipingRouter = require('./shiping/router/shiping.router');

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'It works!!!' });
});

app.use('/api/shiping', shipingRouter);
module.exports = app;