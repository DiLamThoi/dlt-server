const { createEdgeModel } = require('../../base');
const { name, definition } = require('../config/jobConfig');

const HasJobModel = createEdgeModel(name, definition);

module.exports = HasJobModel;
