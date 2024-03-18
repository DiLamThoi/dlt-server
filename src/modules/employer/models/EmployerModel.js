const { createObjectModel } = require('../../base');
const { name, definition } = require('../config/employerConfig');

const EmployerModel = createObjectModel(name, definition);

module.exports = EmployerModel;