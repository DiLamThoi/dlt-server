const StoreConfig = require('../../config/store/storeConfig');
const { createModels } = require('../base');

const models = createModels(StoreConfig.experience, {
    name: String,
}, false);

module.exports = {
    ExperienceModel: models.objectModel,
};
