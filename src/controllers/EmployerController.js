const mongoose = require('mongoose');
const StoreConfig = require('../config/store/storeConfig');
const { EmployerModel } = require('../modules/employer');
const { getObjectDocRequest } = require('../utils/getRequest');

class EmployerController {
    get(req, res, next) {
        const { id } = req.params;
        const data = {
            [StoreConfig.employer]: {}
        };
        if (id) {
            EmployerModel.findOne({ id: new mongoose.Types.ObjectId(id) }).then(employer => {
                if (!employer)
                    return res.status(400).json({ message: 'id not found' }); 
                data[StoreConfig.employer] = getObjectDocRequest(
                    [employer],
                    ['id', 'email', 'name', 'status', 'logo', 'address', 'website', 'description']
                );
                res.json(data);
            }).catch(next);
        } else {
            EmployerModel.find({}).then(employers => {
                data[StoreConfig.employer] = getObjectDocRequest(
                    employers,
                    ['id', 'email', 'name', 'status', 'logo', 'address', 'website', 'description']
                );
                res.json(data);
            }).catch(next);
        }
    }
}

module.exports = new EmployerController();