const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EmployerSchema = new Schema({
    id: mongoose.Types.ObjectId,
    userName: String,
    email: String,
    password: String,
    name: String,
    status: Number,
    logo: String,
    address: String,
});

const EmployerModel = mongoose.model('employers', EmployerSchema);

module.exports = EmployerModel;
