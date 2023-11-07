const JobModal = require('../models/JobModel');

class JobController {
    get(req, res, next) {
        JobModal.find({})
            .then(jobs => {
                const data = {};
                jobs.forEach(job => {
                    Object.assign(data, {
                        [job._id] : {
                            ...job.toObject(),
                            id: job._id,
                            _id: undefined
                        }
                    });
                });
                res.json(data);
            })
            .catch(next);
    }
}

module.exports = new JobController();