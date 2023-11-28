const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    _id: mongoose.Types.ObjectId,
    firstName: String,
    lastName: String,
    fullName: String,
    userName: String,
    email: String,
    password: String,
});

const UserModel = mongoose.model('users', UserSchema);

module.exports = UserModel;
