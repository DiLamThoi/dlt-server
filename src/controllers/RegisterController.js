const jwt = require('jsonwebtoken');
const userModel = require('../models/UserModel');

class RegisterController {
    async post(req, res, next) {
        const { data } = req.body;
        const { firstName, lastName, fullName, userName, email, password } = data;
        userModel.findOne({ $or: [{ userName }, { email }] })
            .then((existingUser) => {
                if (existingUser) {
                    return res.status(400).json({ message: 'Username or email is already in use!' });
                }

                const newUser = new userModel({ firstName, lastName, fullName, userName, email, password });
                newUser.save().then((user) => {
                    const userObject = user.toObject();
                    const token = jwt.sign({
                        id: userObject._id,
                        userName: userObject.userName,
                        email: userObject.email,
                    }, process.env.JWT_SECRET);

                    res.json({ message: 'Registration successful!', token, meId: userObject._id });
                }).catch(next);
            }).catch(next);
    }
}

module.exports = new RegisterController();
