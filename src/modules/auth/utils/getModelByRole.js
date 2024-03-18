const { EmployerModel } = require('../../employer');
const { UserModel } = require('../../user');

const getModelByRole = (role) => {
    switch (role) {
    case 'user':
        return UserModel;
    case 'employer':
        return EmployerModel;
    default:
        return UserModel;
    }
};

module.exports = getModelByRole;
