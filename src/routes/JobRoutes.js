const express = require('express');
const jobController = require('../controllers/JobController');

const router = express.Router();

// Routes
router.get('/', jobController.get);
// router.get('/:id', jobController.get);
router.post('/', jobController.post);
router.delete('/:id', jobController.delete);

module.exports = router;