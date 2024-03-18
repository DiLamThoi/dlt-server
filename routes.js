
const jobRoute = require('./src/routes/JobRoutes');
const employerRoute = require('./src/routes/employerRoutes');
const { userRouter } = require('./src/modules/user');
const { authRouter } = require('./src/modules/auth');
const { jobRouter } = require('./src/modules/job');

const routes = (app) => {
    app.use('/', authRouter);
    app.use('/', userRouter);
    app.use('/', jobRouter);
    app.use('/job', jobRoute);
    app.use('/employer', employerRoute);
};

module.exports = routes;
