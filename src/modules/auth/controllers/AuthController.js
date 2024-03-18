const jwt = require('jsonwebtoken');
const { comparePassword, hashPassword } = require('../utils/encodePassword');
const getModelByRole = require('../utils/getModelByRole');
const mongoose = require('mongoose');

class AuthController {
    async login(req, res, next) {
        const { data } = req.body;
        const { role, userName, email, password } = data;
        const Model = getModelByRole(role);
        Model.findOne({ $or: [{ userName }, { email }] })
            .then(
                async (acc) => {
                    if (!acc)
                        return res.status(401).json({ message: 'Username or email not found!' });
                    const accObject = acc.toObject();
                    const isPasswordValid = await comparePassword(password, accObject.password);
                    if (!isPasswordValid)
                        return res.status(400).json({ message: 'Username or password does not match!' });
                    const token = jwt.sign({
                        id: accObject.id,
                        userName: accObject.userName,
                        email: accObject.email,
                    }, process.env.JWT_SECRET);
                    res.json({ message: 'Login successfully!', token, meId: accObject.id, role });
                }
            ).catch(next);
    }
    async register(req, res, next) {
        const { role, data } = req.body;
        const Model = getModelByRole(role);
        Model.findOne({ $or: [{ userName: data.userName }, { email: data.email }] })
            .then((existingAcc) => {
                if (existingAcc) {
                    return res.status(400).json({ message: 'Username or email is already in use!' });
                }
                hashPassword(data.password).then((hashedPassword) => {
                    return Model.create({
                        id: new mongoose.Types.ObjectId(),
                        ...data,
                        password: hashedPassword,
                    });
                }).then((acc) => {
                    const accObject = acc.toObject();
                    const token = jwt.sign(accObject, process.env.JWT_SECRET);
                    res.json({ message: 'Registration successful!', token, meId: accObject.id, role });
                }).catch(next);
            }).catch(next);
    }
}


// Export an instance of AuthController
const authController = new AuthController();
module.exports = authController;