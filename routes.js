
const { userRouter } = require('./src/modules/user');
const { authRouter } = require('./src/modules/auth');
const { jobRouter } = require('./src/modules/job');
const { employerRouter } = require('./src/modules/employer');

const routes = (app) => {
    app.use('/', authRouter);
    app.use('/', userRouter);
    app.use('/', jobRouter);
    app.use('/', employerRouter);
};

module.exports = routes;
