const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var movieSchema = new Schema({
    name: String,
    director_name: String,
    duration: String,
    actor_1_name: String,
    actor_2_name: String,
    genre: String,
    imdb_score: String,
    year: String,
    language: String,
    budget: String,
});

var movie = mongoose.model('Movie', movieSchema);
module.exports = movie;