const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ExperienceSchema = new Schema({
    id: mongoose.Types.ObjectId,
    name: String,
});

const ExperienceModal = mongoose.model('experiences', ExperienceSchema);

module.exports = ExperienceModal;
