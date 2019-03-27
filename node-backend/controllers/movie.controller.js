const Product = require('../models/movie.model');

exports.search = function (req, res) {
    var phrase = req.query['q'];
    console.log(phrase);
    var exp = new RegExp("$"+phrase+"/");
    movie.find({'name' : { $regex : new RegExp('/^'+phrase+'/i')}}, function(error, movies) {
        if(error) console.log(error);
        res.json(movies);
    });
};