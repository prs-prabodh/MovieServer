const user = require('../models/user.model');

// user.find({}, function(err, res){
//     if(err) console.log(err);
//     else console.log('Users : ', res);
// });

exports.login = function (req, res) {
    user.findOne({ username: req.params.usrname }, function (err, usr) {
        if (err){
            console.log('Error in login!');
        }
        else{
            // res.json(user);
            if (usr == null)
                res.json({ 'status': 'error', 'message': 'Username does not exist!' });
            else if (usr.password != req.params.pass)
                res.json({ 'status': 'error', 'message': 'Incorrect password!' });
            else
                res.json({ 'status': 'success', 'name': usr.name, 'message': 'User authenticated!' });
        }
    });
};