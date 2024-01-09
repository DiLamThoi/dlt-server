const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const HasJobSchema = new Schema({
    id: mongoose.Types.ObjectId,
    parentId: String,
    itemIds: Array,
    items: Array,
    total: Number,
});

const HasJobModal = mongoose.model('hasJobs', HasJobSchema);

module.exports = HasJobModal;
