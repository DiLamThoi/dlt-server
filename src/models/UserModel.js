const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    firstName: String,
    lastName: String,
    fullName: String,
    userName: String,
    email: String,
    password: String,
});

const UserModel = mongoose.model('user', UserSchema);

module.exports = UserModel;
