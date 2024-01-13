const express = require('express');
const employerController = require('../controllers/EmployerController');

const router = express.Router();

// Routes
router.get('/', employerController.get);
router.get('/:id', employerController.get);

module.exports = router;