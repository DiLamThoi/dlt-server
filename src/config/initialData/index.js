const DegreeModal = require('../../models/DegreeModel');
const ExperienceModal = require('../../models/ExperienceModel');
const GenderModal = require('../../models/GenderModel');
const MethodModal = require('../../models/MethodModel');
const StoreConfig = require('../store/storeConfig');
const initialData = require('./initialData');

const initialDatabase = () => {
    if (initialData[StoreConfig.method]) {
        MethodModal.countDocuments({}).then((count) => {
            if (count === 0) {
                MethodModal.create(initialData[StoreConfig.method]).then((methods) => {
                    console.log(`Added ${initialData[StoreConfig.method].length} methods to the database`);
                });
            }
        });
    }
    if (initialData[StoreConfig.degree]) {
        DegreeModal.countDocuments({}).then((count) => {
            if (count === 0) {
                DegreeModal.create(initialData[StoreConfig.degree]).then((degrees) => {
                    console.log(`Added ${initialData[StoreConfig.degree].length} degrees to the database`);
                });
            }
        });
    }
    if (initialData[StoreConfig.experience]) {
        ExperienceModal.countDocuments({}).then((count) => {
            if (count === 0) {
                ExperienceModal.create(initialData[StoreConfig.experience]).then((experiences) => {
                    console.log(`Added ${initialData[StoreConfig.experience].length} experiences to the database`);
                });
            }
        });
    }
    if (initialData[StoreConfig.gender]) {
        GenderModal.countDocuments({}).then((count) => {
            if (count === 0) {
                GenderModal.create(initialData[StoreConfig.gender]).then((genders) => {
                    console.log(`Added ${initialData[StoreConfig.gender].length} genders to the database`);
                });
            }
        });
    }
};

module.exports = initialDatabase;
