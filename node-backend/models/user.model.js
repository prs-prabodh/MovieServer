const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var userSchema = new Schema({
    name: String,
    username: String,
    password: String,
});

var user = mongoose.model('User', userSchema);
module.exports = user;