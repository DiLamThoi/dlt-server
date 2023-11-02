const express = require('express');
const loginController = require('../controllers/LoginController');

const router = express.Router();

// Routes
router.post('/', loginController.post);

module.exports = router;