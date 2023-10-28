const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AuthSchema = new Schema({
    userName: String,
    email: String,
    password: String,
});

const AuthModal = mongoose.model('auth', AuthSchema);

module.exports = AuthModal;
