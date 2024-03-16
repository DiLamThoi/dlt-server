const createModel = require('../modules/base/model/createModel');
const StoreConfig = require('../config/store/storeConfig');

const models = createModel(StoreConfig.degree, {
    name: String,
}, false);

module.exports = {
    DegreeModel: models.objectModel,
};
