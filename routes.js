
const loginRoute = require('./src/routes/LoginRoutes');
const registerRoute = require('./src/routes/RegisterRoute');
const jobRoute = require('./src/routes/JobRoutes');
const employerRoute = require('./src/routes/employerRoutes');
const userRoutes = require('./src/routes/UserRoutes');

const routes = (app) => {
    app.use('/login', loginRoute);
    app.use('/register', registerRoute);
    app.use('/job', jobRoute);
    app.use('/employer', employerRoute);
    app.use('/user', userRoutes);
    app.use('/', (req, res) => {
        // res.send('home');
    });
};

module.exports = routes;
