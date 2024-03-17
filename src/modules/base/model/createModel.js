const mongoose = require('mongoose');
const createObjectModel = require('./createObjectModel');
const createEdgeModel = require('./createEdgeModel');
const Schema = mongoose.Schema;

/**
 * create objectModel and edgeModel for a module
 * @param {String} name name of the module
 * @param {mongoose.SchemaDefinitionType} definition definition of the object
 * @param {Boolean} createEdge 
 * @returns objectModel and edgeModel if createEdge is true
 */
const createModels = (name, definition, createEdge = true) => {
    const objectModel = createObjectModel(name, definition);
    if (!createEdge) return { objectModel };
    else {
        const edgeModel = createEdgeModel(name, definition);
        return { objectModel, edgeModel };
    }
};

module.exports = createModels;
