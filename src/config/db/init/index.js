const { DegreeModel } = require('../../../models/DegreeModels');
const { ExperienceModel } = require('../../../models/ExperienceModels');
const { GenderModel } = require('../../../models/GenderModels');
const { MethodModel } = require('../../../models/MethodModels');
const StoreConfig = require('../../store/storeConfig');
const initialData = require('./initialData');

const initialDatabase = () => {
    if (initialData[StoreConfig.method]) {
        MethodModel.countDocuments({}).then((count) => {
            if (count === 0) {
                MethodModel.create(initialData[StoreConfig.method]).then((methods) => {
                    console.log(`Added ${initialData[StoreConfig.method].length} methods to the database`);
                });
            }
        });
    }
    if (initialData[StoreConfig.degree]) {
        DegreeModel.countDocuments({}).then((count) => {
            if (count === 0) {
                DegreeModel.create(initialData[StoreConfig.degree]).then((degrees) => {
                    console.log(`Added ${initialData[StoreConfig.degree].length} degrees to the database`);
                });
            }
        });
    }
    if (initialData[StoreConfig.experience]) {
        ExperienceModel.countDocuments({}).then((count) => {
            if (count === 0) {
                ExperienceModel.create(initialData[StoreConfig.experience]).then((experiences) => {
                    console.log(`Added ${initialData[StoreConfig.experience].length} experiences to the database`);
                });
            }
        });
    }
    if (initialData[StoreConfig.gender]) {
        GenderModel.countDocuments({}).then((count) => {
            if (count === 0) {
                GenderModel.create(initialData[StoreConfig.gender]).then((genders) => {
                    console.log(`Added ${initialData[StoreConfig.gender].length} genders to the database`);
                });
            }
        });
    }
};

module.exports = initialDatabase;
