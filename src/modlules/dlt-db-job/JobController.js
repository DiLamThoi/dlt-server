const JobModal = require('./JobModal');

class JobController {
    get(req, res, next) {
        res.header('Access-Control-Allow-Origin', 'http://localhost:5173'); // Cấu hình cho origin của trang web của bạn
        res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
        res.header('Access-Control-Allow-Headers', 'Content-Type');
        JobModal.find({})
            .then(jobs => res.json(jobs))
            .catch(next);
    }
}

module.exports = new JobController();