const movie = require('../models/movie.model');

// movie.find({}, function(err, res){
//     if(err) console.log(err);
//     else console.log('Movies : ', res);
// });

exports.search = function (req, res) {
    var phrase = req.params.q;
    // console.log(phrase);
    var exp = new RegExp("^" + phrase, "i");
    // console.log(exp);
    movie.find({ 'name': exp }, function (error, movies) {
        if (error) console.log(error);
        else{
            var editedMovies = [];
            movies.forEach(function(movie) {
                newMovie = movie.toObject();
                newMovie.actors = [movie.actor_1_name, movie.actor_2_name];
                delete newMovie.actor_1_name, newMovie.actor_2_name;
                editedMovies.push(newMovie);
            });
            res.json(editedMovies.slice(0,11));
        }
    });
};