const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const JobModal = new Schema({
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

module.exports = mongoose.model('jobs', JobModal);
