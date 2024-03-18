const { ObjectController } = require('../../base');
const EmployerModel = require('../models/EmployerModel');
const HasEmployerModel = require('../models/HasEmployerModel');

class EmployerController extends ObjectController {
    constructor(options) {
        super(EmployerModel, HasEmployerModel, options);
    }
}

module.exports = EmployerController;
