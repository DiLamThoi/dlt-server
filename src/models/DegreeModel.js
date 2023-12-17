const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DegreeSchema = new Schema({
    id: mongoose.Types.ObjectId,
    name: String,
});

const DegreeModal = mongoose.model('degrees', DegreeSchema);

module.exports = DegreeModal;
