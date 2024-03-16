const createModel = require('../modules/base/model/createModel');
const StoreConfig = require('../config/store/storeConfig');

const models = createModel(StoreConfig.experience, {
    name: String,
}, false);

module.exports = {
    ExperienceModel: models.objectModel,
};