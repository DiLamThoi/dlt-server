const express = require('express');
const employerController = require('../controllers/EmployerController');

const router = express.Router();

// Routes
router.get('/', employerController.get);

module.exports = router;