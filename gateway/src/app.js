const express = require('express');
const app = express();
const usersRouter = require('./users/users.routes');
const shipingRouter = require('./shiping/shiping.routes')

app.use(express.urlencoded({ extended: false }));
app.use(express.json());



app.get('/', (req, res) => {
    res.json({ message: 'GATEWAY!' });
  });


app.use('/api/users', usersRouter);
app.use('/api/shiping', shipingRouter);
module.exports = app;