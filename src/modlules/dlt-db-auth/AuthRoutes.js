const express = require('express');
const router = express.Router();

const authController = require('./AuthController');

// Routes
router.post('/', authController.post);

module.exports = router;