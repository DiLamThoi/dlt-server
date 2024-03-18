const { createEdgeModel } = require('../../base');
const { name, definition } = require('../config/employerConfig');

const HasEmployerModel = createEdgeModel(name, definition);

module.exports = HasEmployerModel;
