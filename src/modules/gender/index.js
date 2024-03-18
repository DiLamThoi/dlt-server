const StoreConfig = require('../../config/store/storeConfig');
const { createModels } = require('../base');

const models = createModels(StoreConfig.gender, {
    name: String, // Tên giới tính (Vietnamese)
    value: Number, // 1: Nam, -1: Nữ, 0: Khác (Use for language processing)
}, false);

module.exports = {
    GenderModel: models.objectModel,
};