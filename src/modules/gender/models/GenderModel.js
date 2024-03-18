const { createObjectModel } = require('../../base');
const { name, definition } = require('../config/genderConfig');

const GenderModel = createObjectModel(name, definition);

module.exports = GenderModel;
