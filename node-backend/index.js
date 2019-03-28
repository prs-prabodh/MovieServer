const express = require('express');
const cors = require('cors')
const mongoose = require('mongoose');
const app = express();

var mongoDB = 'mongodb://127.0.0.1/movieDatabase';
mongoose.connect(mongoDB, { useNewUrlParser: true });

//Get the default connection
var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const login = require('./routes/login.routes');
const register = require('./routes/register.routes');
const movie = require('./routes/movie.routes');

app.use('/login', cors(), login);
app.use('/register', cors(), register);
app.use('/movies', cors(), movie);

app.listen(3000, function(req, res) {
    console.log('Server Running!');
});