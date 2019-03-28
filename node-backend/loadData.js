const data = require('./data/jsonParsedMovieData.json');
const movieModel = require('./models/movie.model');

movieModel.insertMany(data, function(err, res){
    if(err) console.log(err);
    else console.log('Documents imported!');
});