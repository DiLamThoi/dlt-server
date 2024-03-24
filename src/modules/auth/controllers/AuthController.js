const jwt = require('jsonwebtoken');
const { comparePassword, hashPassword } = require('../utils/encodePassword');
const getModelByRole = require('../utils/getModelByRole');
const mongoose = require('mongoose');
const BaseResponse = require('../../base/controller/utils/BaseResponse');

class AuthController {
    login(req, res, next) {
        const Response = new BaseResponse(res);
        const { data, role } = req.body;
        const { userName, email, password } = data;
        const Model = getModelByRole(role);
        Model.findOne({ $or: [{ userName }, { email }] })
            .then((acc) => {
                if (!acc) Response._401('Username or email not found!');
                const accObject = acc.toObject();
                comparePassword(password, accObject.password).then((isPasswordValid) => {
                    if (!isPasswordValid) Response._401('Username or password does not match!');
                    const token = jwt.sign({
                        id: accObject.id,
                        userName: accObject.userName,
                        email: accObject.email,
                    }, process.env.JWT_SECRET);
                    Response._200WithData({ token, meId: accObject.id, role });
                }).catch(next);
            }).catch(next);
    }
    register(req, res, next) {
        const Response = new BaseResponse(res);
        const { role, data } = req.body;
        const Model = getModelByRole(role);
        Model.findOne({ $or: [{ userName: data.userName }, { email: data.email }] })
            .then((existingAcc) => {
                if (existingAcc) {
                    Response._401('Username or email is already in use!');
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
                    Response._200WithData({ token, meId: accObject.id, role });
                }).catch(next);
            }).catch(next);
    }
}


// Export an instance of AuthController
const authController = new AuthController();
module.exports = authController;