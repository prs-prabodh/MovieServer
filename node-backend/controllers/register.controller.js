const user = require('../models/user.model');

// user.find({}, function(err, res){
//     if(err) console.log(err);
//     else console.log('Users : ', res);
// });

exports.register = function (req, res) {
    user.findOne({ 'username': req.params.usrname}, function(err, usr){
        if(err){
            console.log('Error in register!');
            res.json({'status': 'error', 'message': 'Unexpected Error Occrurred. Please try after sometime!'});
        }
        else if(usr != null)
            res.json({ 'status': 'error', 'message': 'Username already exists!' });
        else{
            user({ name: req.params.name_user, username: req.params.usrname, password: req.params.pass }).save();
            res.json({ 'status': 'success', 'message': 'User registered successfully!' })
        }
    });
};