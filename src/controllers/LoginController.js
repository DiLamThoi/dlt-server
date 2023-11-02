const jwt = require('jsonwebtoken');
const userModel = require('../models/UserModel');

class LoginController {
    async post(req, res, next) {
        const { data } = req.body;
        const { userName, email, password } = data;
        userModel.findOne({ $or: [{ userName }, { email }] })
            .then(
                (user) => {
                    if (!user)
                        return res.status(401).json({ message: 'Username or email not found!' });

                    const userObject = user.toObject();
                    if (userObject.password !== password)
                        return res.status(400).json({ message: 'Username or password does not match!' });

                    const token = jwt.sign({
                        id: userObject._id,
                        userName: userObject.userName,
                        email: userObject.email,
                    }, process.env.JWT_SECRET);

                    res.json({ message: 'Login successfully!', token, meId: userObject._id });
                }
            ).catch(next);
    }
}

module.exports = new LoginController();