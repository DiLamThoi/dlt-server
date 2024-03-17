const StoreConfig = require('../../config/store/storeConfig');
const { ObjectController, createModels, ParentController } = require('../base');

const models = createModels(StoreConfig.user, {
    firstName: String,
    lastName: String,
    fullName: String,
    email: String,
    // authentication
    userName: String,
    password: String,
});

const UserModel = models.objectModel;
const HasUserModel=  models.edgeModel;

class UserController extends ObjectController {
    constructor() {
        super(UserModel, HasUserModel);
    }
}

class HasUserController extends ParentController {
    constructor(parentId) {
        super(UserModel, HasUserModel, parentId);
    }
}

module.exports = {
    UserModel,
    HasUserModel,
    UserController,
    HasUserController,
};
