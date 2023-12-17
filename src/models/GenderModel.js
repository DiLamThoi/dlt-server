const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GenderSchema = new Schema({
    id: mongoose.Types.ObjectId,
    name: String,
    value: { type: Number, enum: [0, 1, -1] }, // 0: none | 1: male | -1: female
});

const GenderModal = mongoose.model('genders', GenderSchema);

module.exports = GenderModal;
