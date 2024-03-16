const createModel = require('../modules/base/model/createModel');
const StoreConfig = require('../config/store/storeConfig');

const models = createModel(StoreConfig.method, {
    name: String,
}, false);

module.exports = {
    MethodModel: models.objectModel,
};
