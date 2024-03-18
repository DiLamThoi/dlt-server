const mongoose = require('mongoose');
const StoreConfig = require('../config/store/storeConfig');
const { getObjectDocRequest } = require('../utils/getRequest');
const { UserModel } = require('../modules/user');

class UserController {
    get(req, res, next) {
        const { id } = req.params;
        const data = {
            [StoreConfig.user]: {}
        };
        if (id) {
            UserModel.findOne({ id: new mongoose.Types.ObjectId(id) }).then(user => {
                if (!user) return res.status(400).json({ message: 'id not found' }); 
                data[StoreConfig.user] = getObjectDocRequest(
                    [user],
                    ['id', 'email', 'firstName', 'lastName', 'fullName', 'userName']
                );
                res.json(data);
            }).catch(next);
        } else {
            UserModel.find({}).then(users => {
                data[StoreConfig.user] = getObjectDocRequest(
                    users,
                    ['id', 'email', 'firstName', 'lastName', 'fullName', 'userName']
                );
                res.json(data);
            }).catch(next);
        }
    }
}

module.exports = new UserController();