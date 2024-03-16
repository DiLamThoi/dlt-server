const createModel = require('../modules/base/model/createModel');
const StoreConfig = require('../config/store/storeConfig');

const models = createModel(StoreConfig.user, {
    firstName: String,
    lastName: String,
    fullName: String,
    email: String,
    // authentication
    userName: String,
    password: String,
});

module.exports = {
    UserModel: models.objectModel,
    HasUserModel: models.edgeModel,
};

