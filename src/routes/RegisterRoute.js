const express = require('express');
const registerController = require('../controllers/RegisterController');

const router = express.Router();

// Routes
router.post('/', registerController.post);

module.exports = router;