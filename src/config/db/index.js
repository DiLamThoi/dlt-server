const mongoose = require('mongoose')

async function connect() {
    try {
        await mongoose.connect('mongodb://server.truongnbn.com:27017/dlt-server', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log('connect successfully')
    } catch (error) {
        console.log('connect failure', error)
    }
}

module.exports = { connect }