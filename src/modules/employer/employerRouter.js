const express = require('express');
const EmployerController = require('./controllers/EmployerController');

const router = express.Router();
const employerController = new EmployerController();

// Routes
router.get('/employer/', employerController.getAll);
router.get('/employer/:id', employerController.getById);

module.exports = router;
