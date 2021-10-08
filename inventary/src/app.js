const express = require('express');

const app = express();
const inventaryRouter = require('./router/inventary.routes');

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'inventary works!!!' });
});

app.use('/api/inventary', inventaryRouter);
module.exports = app;