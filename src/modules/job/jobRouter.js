const express = require('express');
const JobController = require('./controllers/JobController');

const router = express.Router();
const jobController = new JobController();

// Routes
router.get('/job/', jobController.getAll);
router.get('/job/:id', jobController.getById);
router.post('/job/', jobController.create);
router.delete('/job/:id', jobController.delete);

module.exports = router;