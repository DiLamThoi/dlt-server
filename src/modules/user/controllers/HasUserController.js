const { ParentController } = require('../../base');
const HasUserModel = require('../models/HasUserModel');
const UserModel = require('../models/UserModel');

class HasUserController extends ParentController {
    constructor(parentId, options) {
        super(UserModel, HasUserModel, parentId, options);
    }
}

module.exports = HasUserController;
