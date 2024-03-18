const StoreConfig = require('../../config/store/storeConfig');
const { createModels } = require('../base');

const models = createModels(StoreConfig.method, {
    name: String,
}, false);

module.exports = {
    MethodModel: models.objectModel,
};
