const { createObjectModel } = require('../../base');
const { name, definition } = require('../config/experienceConfig');

const ExperienceModel = createObjectModel(name, definition);

module.exports = ExperienceModel;