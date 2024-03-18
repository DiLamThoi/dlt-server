const { ObjectController } = require('../../base');
const JobModel = require('../models/JobModel');
const HasJobModel = require('../models/HasJobModel');

class JobController extends ObjectController {
    constructor(options) {
        super(JobModel, HasJobModel, options);
    }
}

module.exports = JobController;
