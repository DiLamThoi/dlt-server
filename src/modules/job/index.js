const { name } = require('./config/jobConfig');
const JobModel = require('./models/JobModel');
const HasJobModel = require('./models/HasJobModel');
const jobRouter = require('./jobRouter');

module.exports = {
    name,
    JobModel,
    HasJobModel,
    jobRouter,
};