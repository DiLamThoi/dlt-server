const EmployerModel = require('../models/EmployerModel');

class EmployerController {
    get(req, res, next) {
        EmployerModel.find({})
            .then(employers => {
                const data = {};
                employers.forEach(employer => {
                    Object.assign(data, {
                        [employer.id] : {
                            id: employer.id,
                            name: employer.name,
                            status: employer.status,
                            logo: employer.logo,
                            address: employer.address,
                        }
                    });
                });
                res.json(data);
            })
            .catch(next);
    }
}

module.exports = new EmployerController();