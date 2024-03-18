const { name } = require('./config/userConfig');
const UserModel = require('./models/UserModel');
const HasUserModel = require('./models/HasUserModel');
const userRouter = require('./userRouter');

module.exports = {
    name,
    UserModel,
    HasUserModel,
    userRouter,
};
