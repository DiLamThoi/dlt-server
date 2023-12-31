const StoreConfig = require('../config/store/storeConfig');
const EmployerModel = require('../models/EmployerModel');
const { getObjectDocRequest } = require('../utils/getRequest');

class EmployerController {
    get(req, res, next) {
        const data = { [StoreConfig.employer]: {} };
        EmployerModel.find({}).then(employers => {
            data[StoreConfig.employer] = getObjectDocRequest(employers, ['id', 'name', 'status', 'logo', 'address']);
            res.json(data);
        }).catch(next);
    }
}

module.exports = new EmployerController();