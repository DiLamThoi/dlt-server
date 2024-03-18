const mongoose = require('mongoose');
const StoreConfig = require('../config/store/storeConfig');
const { JobModel, HasJobModel } = require('../modules/job');
const { getObjectDocRequest, getEdgeDocRequest } = require('../utils/getRequest');

class JobController {
    get(req, res, next) {
        const { id } = req.params;
        const data = {
            [StoreConfig.job]: {},
            [StoreConfig.hasJob]: {},
        };
        if (id) {
            JobModel.findById(new mongoose.Types.ObjectId(id)).then(job => {
                data[StoreConfig.job] = getObjectDocRequest([job]);
                data[StoreConfig.hasJob] = getEdgeDocRequest([job]);
                res.json(data);
            }).catch(next);
        }
        JobModel.find({}).then(jobs => {
            data[StoreConfig.job] = getObjectDocRequest(jobs);
            data[StoreConfig.hasJob] = getEdgeDocRequest(jobs);
            res.json(data);
        }).catch(next);
    }

    post(req, res, next) {
        const { data } = req.body;
        const parentId = data.employerId;
        const resData = {
            [StoreConfig.job]: {},
            [StoreConfig.hasJob]: {},
        };
        const id = new mongoose.Types.ObjectId();
        JobModel.create({ ...data, id }).then((job) => {
            resData[StoreConfig.job] = getObjectDocRequest([job]);
            resData[StoreConfig.hasJob] = getEdgeDocRequest([job]);
            // HasJobModal.findOneAndUpdate({ parentId }, {
            //     $addToSet: {
            //         itemIds: id,
            //         items: job.toObject()
            //     },
            //     $inc: {
            //         total: 1
            //     }
            // });
            res.json(resData);
        }).catch(next);
    }

    delete(req, res, next) {
        const { id } = req.params;
        JobModel.deleteOne({ id: new mongoose.Types.ObjectId(id) }).then((result) => {
            if (result.deletedCount === 1) res.json({ message: 'Delete successfully!' });
            res.status(404).json({ message: 'JobId not found!' });
        }).catch(next);
    }
}

module.exports = new JobController();