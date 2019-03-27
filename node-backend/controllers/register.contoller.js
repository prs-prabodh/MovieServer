const user = require('../models/user.model');

exports.register = function (req, res) {
    user.findOne({'username' : username}, function(err, _){
        if(err){
            console.log('Error in register!');
            res.json({'status': 'error', 'message': 'Username already exists!'});
        }
        user({name: name, name_user: usrname, password: pass}).save();
        res.json({ 'status': 'success', 'message': 'User registered successfully!'})
    });
};