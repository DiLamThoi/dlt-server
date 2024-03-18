const name = 'User';
const definition = {
    firstName: String,
    lastName: String,
    fullName: String,
    email: String,
    // authentication
    userName: String,
    password: String,
};

module.exports = {
    name,
    definition,
};