const mongoose = require('mongoose');
const StoreConfig = require('../config/store/storeConfig');
const JobModal = require('../models/JobModel');
const EmployerModel = require('../models/EmployerModel');
const { getObjectDocRequest, getEdgeDocRequest } = require('../utils/getRequest');

class JobController {
    get(req, res, next) {
        const data = {
            [StoreConfig.job]: {},
            [StoreConfig.hasJob]: {},
            // [StoreConfig.employer]: {},
        };
        JobModal.find({}).then(jobs => {
            data[StoreConfig.job] = getObjectDocRequest(jobs);
            data[StoreConfig.hasJob] = getEdgeDocRequest(jobs);
            res.json(data);
        }).catch(next);
    }
}

module.exports = new JobController();