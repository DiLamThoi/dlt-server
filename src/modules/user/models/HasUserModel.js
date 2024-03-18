const { createEdgeModel } = require('../../base');
const { name, definition } = require('../config/userConfig');

const HasUserModel = createEdgeModel(name, definition);

module.exports = HasUserModel;
