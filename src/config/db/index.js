const mongoose = require('mongoose');
const initialDatabase = require('./init');

const DATABASE_URI
    = 'mongodb+srv://truongnbn:truongnbn@cluster0.dd9z0pf.mongodb.net/dlt-server?retryWrites=true&w=majority';

async function connect(uri = DATABASE_URI) {
    try {
        await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Connect database successfully!');
    } catch (error) {
        throw new Error(`Connect database failure: ${error}`);
    }
}

const Database = {
    connect,
    init: initialDatabase,
};

module.exports = Database;