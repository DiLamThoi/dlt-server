const StoreConfig = require('../../config/store/storeConfig');
const { ObjectController, createModels, ParentController } = require('../base');

const models = createModels(StoreConfig.employer, {
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