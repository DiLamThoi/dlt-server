const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const HasFollowSchema = new Schema({
    id: mongoose.Types.ObjectId,
    parentId: String,
    itemIds: Array,
    items: Array,
    total: Number,
});

const HasFollowModel = mongoose.model('hasFollows', HasFollowSchema);

module.exports = HasFollowModel;
