const express = require('express');
const router = express.Router();

const jobController = require('./JobController');

// Routes
router.get('/', jobController.get);

module.exports = router;