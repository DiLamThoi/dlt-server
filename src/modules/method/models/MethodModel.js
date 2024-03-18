const { createObjectModel } = require('../../base');
const { name, definition } = require('../config/methodConfig');

const MethodModel = createObjectModel(name, definition);

module.exports = MethodModel;
