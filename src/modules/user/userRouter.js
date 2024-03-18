const express = require('express');
const UserController = require('./controllers/UserController');

const router = express.Router();
const userController = new UserController({ blockedFields: ['userName', 'password'] });
router.get('/user/', userController.getAll);
router.get('/user/:id', userController.getById);

module.exports = router;