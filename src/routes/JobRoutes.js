const express = require('express');
const jobController = require('../controllers/JobController');

const router = express.Router();

// Routes
router.get('/', jobController.get);

module.exports = router;