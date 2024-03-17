const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
 * create objectModel for a module
 * @param {String} name name of the module
 * @param {mongoose.SchemaDefinitionType} definition definition of the object
 * @returns objectModel
 */
const createObjectModel = (name, definition) => {
    const objectSchema = new Schema({
        id: mongoose.Types.ObjectId,
        ...definition,
        createdTime: Number,
    });
    const objectModel = mongoose.model(name, objectSchema);
    return objectModel;
};

module.exports = createObjectModel;