const { createObjectModel } = require('../../base');
const { name, definition } = require('../config/jobConfig');

const JobModel = createObjectModel(name, definition);

module.exports = JobModel;
