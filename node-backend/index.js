const express = require('express');
const cors = require('cors')
const mongoose = require('mongoose');
// const data = require('./data/jsonParsedMovieData.json');
const app = express();

var mongoDB = 'mongodb://127.0.0.1/movieDatabase';
mongoose.connect(mongoDB, { useNewUrlParser: true });

//Get the default connection
var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// const movieModel = require('./models/movie.model');
// movieModel.insertMany(data, function(err, res){
//     if(err) console.log(err);
//     else console.log('Documents imported!');
// });

const login = require('./routes/login.routes');
const register = require('./routes/register.routes');
const movie = require('./routes/movie.routes');

app.use('/login', cors(), login);
app.use('/register', cors(), register);
app.use('/movies', cors(), movie);

app.listen(3000, function(req, res) {
    console.log('Server Running!');
});