const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MethodSchema = new Schema({
    id: mongoose.Types.ObjectId,
    name: String,
});

const MethodModal = mongoose.model('methods', MethodSchema);

module.exports = MethodModal;
