
const jobRoute = require('./src/modlules/dlt-db-job/JobRoutes');
const authRoute = require('./src/modlules/dlt-db-auth/AuthRoutes');

const routes = (app) => {
    app.use('/jobs', jobRoute);
    app.use('/auth', authRoute);
    app.use('/', (req, res) => {
        res.send('home');
    });
};

module.exports = routes;
