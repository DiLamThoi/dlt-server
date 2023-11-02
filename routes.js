
const loginRoute = require('./src/routes/LoginRoutes');
const registerRoute = require('./src/routes/RegisterRoute');
const jobRoute = require('./src/routes/JobRoutes');

const routes = (app) => {
    app.use('/login', loginRoute);
    app.use('/register', registerRoute);
    app.use('/jobs', jobRoute);
    app.use('/', (req, res) => {
        res.send('home');
    });
};

module.exports = routes;
