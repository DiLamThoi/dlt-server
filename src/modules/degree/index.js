const StoreConfig = require('../../config/store/storeConfig');
const { createModels } = require('../base');

const models = createModels(StoreConfig.degree, {
    name: String,
}, false);

module.exports = {
    DegreeModel: models.objectModel,
};
