const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const userModel = require('../models/UserModel');
const employerModel = require('../models/EmployerModel');
const { hashPassword } = require('../utils/securityPassword');

class RegisterController {
    async post(req, res, next) {
        const { role, data } = req.body;

        if (role === 'user') {
            const { firstName, lastName, fullName, userName, email, password } = data;
            userModel.findOne({ $or: [{ userName }, { email }] })
                .then((existingUser) => {
                    if (existingUser) {
                        return res.status(400).json({ message: 'Username or email is already in use!' });
                    }
                    hashPassword(password).then((hashedPassword) => {
                        return userModel.create({
                            _id: new mongoose.Types.ObjectId(),
                            firstName,
                            lastName,
                            fullName,
                            userName,
                            email,
                            password: hashedPassword,
                        });
                    }).then((user) => {
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
        else if (role === 'employer') {
            const { name, address, email, userName, password } = data;
            employerModel.findOne({ $or: [{ userName }, { email }] })
                .then((existingEmployer) => {
                    if (existingEmployer) {
                        return res.status(400).json({ message: 'Username or email is already in use!' });
                    }
                    hashPassword(password).then((hashedPassword) => {
                        return employerModel.create({
                            _id: new mongoose.Types.ObjectId(),
                            name,
                            address,
                            userName,
                            email,
                            password: hashedPassword,
                        });
                    }).then((employer) => {
                        const employerObject = employer.toObject();
                        const token = jwt.sign({
                            id: employerObject._id,
                            userName: employerObject.userName,
                            email: employerObject.email,
                        }, process.env.JWT_SECRET);
                        res.json({ message: 'Registration successful!', token, meId: employerObject._id });
                    }).catch(next);
                }).catch(next);
        } else {
            return res.status(400).json({ message: 'Role is invalid!' });
        }
    }
}

module.exports = new RegisterController();
