const user = require('../models/product.model');

//Simple version, without validation or sanitation
exports.login = function (req, res) {
    user.findOne({ 'username': username }, function (err, user) {
        if (err){
            console.log('Error in login!');
            res.json({ 'status': 'error', 'message': 'Username does not exist!' });
        }
        else{
            if(user.password==pass)
                res.json({ 'status': 'success', 'message': 'User authenticated!' });
            else res.json({ 'status': 'error', 'message': 'Incorrect password!' });
        }
        user({ name: name, name_user: usrname, password: pass }).save();
        res.json({ 'status': 'success', 'message': 'User registered successfully!' })
    });
};