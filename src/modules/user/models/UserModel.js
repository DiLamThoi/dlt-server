const { createObjectModel } = require('../../base');
const { name, definition } = require('../config/userConfig');

const UserModel = createObjectModel(name, definition);

module.exports = UserModel;
