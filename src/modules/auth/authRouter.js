const express = require('express');
const authController = require('./controllers/AuthController');

const authRouter = express.Router();

// Routes
authRouter.post('/login', authController.login);
authRouter.post('/register', authController.register);

module.exports = authRouter;