const jwt = require('jsonwebtoken');
const { UserModel } = require('../modules/user');
const { EmployerModel } = require('../modules/employer');
const { comparePassword } = require('../utils/securityPassword');

class LoginController {
    async post(req, res, next) {
        const { data } = req.body;
        const { role, userName, email, password } = data;
        let roleModel = UserModel;
        switch (role) {
        case 'user':
            roleModel = UserModel;
            break;
        case 'employer':
            roleModel = EmployerModel;   
            break;
        default:
            break;
        }

        roleModel.findOne({ $or: [{ userName }, { email }] })
            .then(
                async (user) => {
                    if (!user)
                        return res.status(401).json({ message: 'Username or email not found!' });

                    const userObject = user.toObject();
                    const isPasswordValid = await comparePassword(password, userObject.password);
                    if (!isPasswordValid)
                        return res.status(400).json({ message: 'Username or password does not match!' });

                    const token = jwt.sign({
                        id: userObject.id,
                        userName: userObject.userName,
                        email: userObject.email,
                    }, process.env.JWT_SECRET);

                    res.json({ message: 'Login successfully!', token, meId: userObject.id, role });
                }
            ).catch(next);
    }
}

module.exports = new LoginController();
