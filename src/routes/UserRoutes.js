const express = require('express');
const userController = require('../controllers/UserController');

const router = express.Router();

// Routes
router.get('/', userController.get);
router.get('/:id', userController.get);

module.exports = router;