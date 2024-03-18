const { createObjectModel } = require('../../base');
const { name, definition } = require('../config/degreeConfig');

const DegreeModel = createObjectModel(name, definition);

module.exports = DegreeModel;
