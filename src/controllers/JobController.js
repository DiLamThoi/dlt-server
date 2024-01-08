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

    post(req, res, next) {
        const { data } = req.body;
        const resData = {
            [StoreConfig.job]: {},
            [StoreConfig.hasJob]: {},
        };
        JobModal.create({ ...data, id: new mongoose.Types.ObjectId() }).then((job) => {
            resData[StoreConfig.job] = getObjectDocRequest([job]);
            resData[StoreConfig.hasJob] = getEdgeDocRequest([job]);
            res.json(resData);
        }).catch(next);
    }

    delete(req, res, next) {
        const { id } = req.params;
        JobModal.deleteOne({ id: new mongoose.Types.ObjectId(id) }).then((result) => {
            if (result.deletedCount === 1) res.json({ message: 'Delete successfully!' });
            res.status(404).json({ message: 'JobId not found!' });
        }).catch(next);
    }
}

module.exports = new JobController();