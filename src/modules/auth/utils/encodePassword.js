const bcrypt = require('bcrypt');

const hashPassword = (plainPassword, saltRounds = 10) => {
    return new Promise((resolve, reject) => {
        bcrypt.hash(plainPassword, saltRounds, (err, hash) => {
            if (err) reject(err);
            else resolve(hash);
        });
    });
};

const comparePassword = (plainPassword, hashedPassword) => {
    return new Promise((resolve, reject) => {
        bcrypt.compare(plainPassword, hashedPassword, (err, result) => {
            if (err) reject(err);
            else resolve(result);
        });
    });
};

module.exports = {
    hashPassword,
    comparePassword,
};
