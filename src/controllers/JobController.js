const mongoose = require('mongoose');
const StoreConfig = require('../config/store/storeConfig');
const JobModal = require('../models/JobModel');
const EmployerModel = require('../models/EmployerModel');

class JobController {
    get(req, res, next) {
        const data = {
            [StoreConfig.job]: {},
            [StoreConfig.hasJob]: {},
            [StoreConfig.employer]: {},
        };
        JobModal.find({}).then(jobs => {
            const employerIds = [];
            jobs.forEach(job => {
                const jobObject = job.toObject();
                const { id } = jobObject;
                Object.assign(data[StoreConfig.job], {
                    [id] : jobObject
                });
                if (data[StoreConfig.hasJob][-1]) {
                    data[StoreConfig.hasJob][-1].push(id);
                } else {
                    Object.assign(data[StoreConfig.hasJob], { [-1]: [id] });
                }
            });
            return employerIds;
        }).then((employerIds) => {
            employerIds.forEach((employerId) => {
                const objectId = new mongoose.Types.ObjectId(employerId);
                EmployerModel.findOne({ id: objectId }).then((employer) => {
                    const employerObject = employer.toObject();
                    const { id, name, logo, address } = employerObject;
                    Object.assign(data[StoreConfig.employer], {
                        [employerObject.id] : { id, name, logo, address }
                    });
                });
            });
            res.json(data);
        }).catch(next);
        
    }
}

module.exports = new JobController();