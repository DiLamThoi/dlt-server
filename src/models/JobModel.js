const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const JobSchema = new Schema({
    title: String,
    description: String,
    educationLevel: Number,
    generalTitle: String,
    level: String,
    salary: String,
    location: String,
    type: String,
    hours: Number,
    startTime: Number,
    applicationDeadline: Number,
    employerId: String,
});

const JobModal = mongoose.model('jobs', JobSchema);

module.exports = JobModal;
