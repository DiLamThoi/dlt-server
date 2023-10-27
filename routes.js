
const jobRoute = require('./src/modlules/dlt-db-job/JobRoute')

const routes = (app) => {
    app.use('/jobs', jobRoute)
    app.use('/', (req, res) => {
        res.send("home")
    })
};

module.exports = routes;
