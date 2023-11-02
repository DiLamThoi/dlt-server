const JobModal = require('../models/JobModel');

class JobController {
    get(req, res, next) {
        JobModal.find({})
            .then(jobs => res.json(jobs))
            .catch(next);
    }
}

module.exports = new JobController();