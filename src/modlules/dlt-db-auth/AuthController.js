const jwt = require('jsonwebtoken');
const authModal = require('./AuthModal');

class AuthController {
    async post(req, res, next) {
        const { userName, email, password } = req.body;
        authModal.findOne({ $or: [{ userName }, { email }] })
            .then(
                (user) => {
                    const userObject = user.toObject();
                    if (!userObject)
                        return res.status(401).json({ message: 'Username or email not found!' });

                    if (userObject.password !== password)
                        return res.status(400).json({ message: 'Username or password does not match!' });

                    const token = jwt.sign({
                        id: userObject._id,
                        userName: userObject.userName,
                        email: userObject.email,
                    }, process.env.JWT_SECRET);

                    res.json({ message: 'Login successfully!', token });
                }
            ).catch(next);
    }
}

module.exports = new AuthController();
