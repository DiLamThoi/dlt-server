const { name } = require('./config/employerConfig');
const EmployerModel = require('./models/EmployerModel');
const HasEmployerModel = require('./models/HasEmployerModel');
const employerRouter = require('./employerRouter');

module.exports = {
    name,
    EmployerModel,
    HasEmployerModel,
    employerRouter,
};