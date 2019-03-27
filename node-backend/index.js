const express = require('express');
const mongoose = require('mongoose');
const app = express();

var mongoDB = 'mongodb://127.0.0.1/movieDatabase';
mongoose.connect(mongoDB, { useNewUrlParser: true });

//Get the default connection
var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// var Schema = mongoose.Schema;
// var userSchema = new Schema({
//     name: String,
//     username: String,
//     password: String
// });

// var movieSchema = new Schema({
//     name: String,
//     director_name: String,
//     duration: String,
//     actor_1_name: String,
//     actor_2_name: String,
//     genre: String,
//     imdb_score: String,
//     year: String,
//     language: String,
//     budget: String,
// });


// var user = mongoose.model('User', userSchema);
// var movie = mongoose.model('Movie', movieSchema);

// module.exports = user;
// module.exports = movie;

var m = new movie({
    name: 'Interstellar',
    director_name: 'Christopher Nolan',
    duration: '169',
    actor_1_name: "actor 1",
    actor_2_name: 'actor 2',
    genre: 'Sci-Fi | Adventure',
    imdb_score: '8.1',
    year: '2015',
    language: 'English',
    budget: '200000000',
});
 m.save(function(err){
     if(err) console.log('Object not saved!');
     else {
        console.log('Object Saved!');
        user.find({ 'name': 'Interstellar' }, function (err, res) {
            if (err) console.log(err)
            console.log(res);
        });
    }
 });

 const login = require('./routes/login.routes');
 const register = require('./routes/register.routes');
 const movie = require('./routes/movie.routes');

 app.use('/login', login);
 app.use('/register', register);
 app.use('/movie', movie);

// app.get('/movies/', function(req, res) {
//     var phrase = req.query['q'];
//     var exp = new RegExp("$"+phrase+"/");
//     movie.find({'name' : { $regex : new RegExp('/^'+phrase+'/i')}}, function(error, movies) {
//         if(error) console.log(error);
//         res.json(movies);
//     });
// });

// app.get('/register/:name_user/:usrname/:pass', function (req, res) {
//     user.findOne({'username' : username}, function(err, _){
//         if(err){
//             console.log('Error in register!');
//             res.json({'status': 'error', 'message': 'Username already exists!'});
//         }
//         user({name: name, name_user: usrname, password: pass}).save();
//         res.json({ 'status': 'success', 'message': 'User registered successfully!'})
//     });
// });

// app.get('/login/:usrname/:pass', function (req, res) {
//     user.findOne({ 'username': username }, function (err, user) {
//         if (err){
//             console.log('Error in login!');
//             res.json({ 'status': 'error', 'message': 'Username does not exist!' });
//         }
//         else{
//             if(user.password==pass)
//                 res.json({ 'status': 'success', 'message': 'User authenticated!' });
//             else res.json({ 'status': 'error', 'message': 'Incorrect password!' });
//         }
//         user({ name: name, name_user: usrname, password: pass }).save();
//         res.json({ 'status': 'success', 'message': 'User registered successfully!' })
//     });
// });

app.listen(3000, function(req, res) {
    console.log('Server Running!');
    // user.findOne({'name': 'Interstellar'}, function(err, res){
    //     if(err) console.log(err)
    //     console.log(res);
    // });
});