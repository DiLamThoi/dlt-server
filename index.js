const express = require('express');
const morgan = require('morgan');
const routes  = require('./routes');
const port = 8080; // DefaultPort for HTTP

// Connect Server: mongoDB - localhost
const db = require('./src/config/db');
db.connect();

// Init ServerApp
const app = express();

// MiddleWare
app.use(morgan('combined'));
app.use(express.json());

// Routes Module
routes(app);

// Listen server
app.listen('8080', () => {
    console.log(`Server is running on ${port}`);
});