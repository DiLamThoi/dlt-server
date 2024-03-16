const createModel = require('../modules/base/model/createModel');
const StoreConfig = require('../config/store/storeConfig');

const models = createModel(StoreConfig.employer, {
    email: String,
    name: String,
    logo: String,
    address: String,
    website: String,
    description: String,
    // authentication
    userName: String,
    password: String,
});

module.exports = {
    EmployerModel: models.objectModel,
    HasEmployerModel: models.edgeModel,
};
