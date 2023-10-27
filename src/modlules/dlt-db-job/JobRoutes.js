const express = require('express');
const router = express.Router();

const jobController = require('./JobController');

// Routers
router.get('/', jobController.get);
router.post('/', jobController.post);

module.exports = router;