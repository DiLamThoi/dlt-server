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
                const {
                    _id,
                    title,
                    levelId,
                    employerId,
                    quantity,
                    methodId,
                    probationTime,
                    salaryUnit,
                    salaryMin,
                    salaryMax,
                    applyStartTime,
                    applyEndTime,
                    applyCount,
                    ageMin,
                    ageMax,
                    degreeId,
                    genderId,
                    description,
                    totalView
                } = jobObject;
                Object.assign(data[StoreConfig.job], {
                    [jobObject._id] : {
                        id: _id,
                        title,
                        levelId,
                        employerId,
                        quantity,
                        methodId,
                        probationTime,
                        salaryUnit,
                        salaryMin,
                        salaryMax,
                        applyStartTime,
                        applyEndTime,
                        applyCount,
                        ageMin,
                        ageMax,
                        degreeId,
                        genderId,
                        description,
                        totalView,
                    }
                });
                if (data[StoreConfig.hasJob][employerId]) {
                    data[StoreConfig.hasJob][employerId].push(_id);
                } else {
                    Object.assign(data[StoreConfig.hasJob], { [employerId]: [_id] });
                    employerIds.push(employerId);
                }
            });
            return employerIds;
        }).then((employerIds) => {
            employerIds.forEach((employerId) => {
                const objectId = new mongoose.Types.ObjectId(employerId);
                EmployerModel.findOne({ _id: objectId }).then((employer) => {
                    const employerObject = employer.toObject();
                    const { _id, name, logo, address } = employerObject;
                    Object.assign(data[StoreConfig.employer], {
                        [employerObject._id] : { id: _id, name, logo, address }
                    });
                });
            });
            res.json(data);
        }).catch(next);
        
    }
}

module.exports = new JobController();