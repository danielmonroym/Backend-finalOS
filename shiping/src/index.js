
const mongoose = require('mongoose');
const winston = require('winston');
const app = require('./app');

mongoose.connect('mongodb+srv://root:root@cluster0.r3v7w.mongodb.net/finalOS?retryWrites=true&w=majority');
mongoose.Promise = global.Promise;

mongoose.connection.on('connected', () => {
  winston.info('Mongoose connected!');
});

mongoose.connection.on('disconnected', () => {
  winston.info('Mongoose disconnected!');
});

mongoose.connection.on('error', (err) => {
  winston.error(err.message);
});

app.listen(4000, () => {
    console.log('Listening on port 4000');
});