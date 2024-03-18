const { name } = require('./config/employerConfig');
const EmployerModel = require('./models/EmployerModel');
const HasEmployerModel = require('./models/HasEmployerModel');

module.exports = {
    name,
    EmployerModel,
    HasEmployerModel,
};