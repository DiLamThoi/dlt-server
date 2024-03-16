const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const createModel = (name, definition, createEdge = true) => {
    const objectSchema = new Schema({
        id: mongoose.Types.ObjectId,
        ...definition,
    });
    const objectModel = mongoose.model(name, objectSchema);
    if (!createEdge) return { objectModel };
    else {
        const edgeSchema = new Schema({
            id: mongoose.Types.ObjectId,
            parentId: String,
            itemIds: Array,
            items: Array,
            total: Number,
        });
        const edgeModel = mongoose.model(`Has${name}`, edgeSchema);
        return { objectModel, edgeModel };
    }
};

module.exports = createModel;
