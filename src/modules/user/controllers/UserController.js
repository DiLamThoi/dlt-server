const { ObjectController } = require('../../base');
const HasUserModel = require('../models/HasUserModel');
const UserModel = require('../models/UserModel');

class UserController extends ObjectController {
    constructor(options) {
        super(UserModel, HasUserModel, options);
    }
}

module.exports = UserController;