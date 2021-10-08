const express = require('express');
const app = express();
const usersRouter = require('./users/users.routes');
<<<<<<< HEAD
const inventaryRouter = require('./inventary/inventary.routes');
=======
const shipingRouter = require('./shiping/shiping.routes')
>>>>>>> ac203944f444524b67f10db325f09d25bab26d5b

app.use(express.urlencoded({ extended: false }));
app.use(express.json());



app.get('/', (req, res) => {
    res.json({ message: 'GATEWAY!' });
  });


<<<<<<< HEAD
  app.use('/api/users', usersRouter);
  app.use('/api/inventory', inventoryRouter);
  module.exports = app;
=======
app.use('/api/users', usersRouter);
app.use('/api/shiping', shipingRouter);
module.exports = app;
>>>>>>> ac203944f444524b67f10db325f09d25bab26d5b
