const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
 * create edgeModel for a module
 * @param {String} name name of the module
 * @param {mongoose.SchemaDefinitionType} objectDefinition definition of the object
 * @returns edgeModel
 */
const createEdgeModel = (name, objectDefinition) => {
    const edgeSchema = new Schema({
        id: mongoose.Types.ObjectId,
        itemIds: {
            type: [mongoose.Types.ObjectId],
            default: [],
        },
        items: {
            type: [objectDefinition],
            default: [],
        },
        total: {
            type: Number,
            default: 0,
        },
    });
    const edgeModel = mongoose.model(`Has${name}`, edgeSchema);
    return edgeModel;
};

module.exports = createEdgeModel;
