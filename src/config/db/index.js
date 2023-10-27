const mongoose = require('mongoose');

const DATABASE_URI = 'mongodb://server.truongnbn.com:27017/dlt-server';

async function connect(uri = DATABASE_URI) {
    try {
        await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Connect database successfully!');
    } catch (error) {
        console.log('Connect database failure!', error);
    }
}

const DataBase = {
    connect,
};

module.exports = DataBase;