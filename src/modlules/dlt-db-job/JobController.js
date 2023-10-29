const JobModal = require('./JobModal');

class JobController {
    get(req, res, next) {
        JobModal.find({})
            .then(jobs => res.json(jobs))
            .catch(next);
    }
}

module.exports = new JobController();