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
        res.json(movies);
    });
};