const express = require('express');
const env = require('dotenv');
const morgan = require('morgan');
const routes  = require('./routes');
const port = 8080; // DefaultPort for HTTP


// Connect Server: mongoDB - localhost
const DataBase = require('./src/config/db');
DataBase.connect();

// Init ServerApp
const app = express();

// MiddleWare
env.config();
app.use(morgan('combined'));
app.use(express.json());

// Routes Module
routes(app);

// Listen server
app.listen(port, () => {
    console.log(`Server is running on ${port}`);
});