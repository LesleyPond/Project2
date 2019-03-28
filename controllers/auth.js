const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const authService = require('../services/auth');
const userService = require('../services/user');

const login = async (req, res) => {
    return await authService.authenticate(req.body)
        .then(token => {
            res.cookie('jwt',token);
            res.send({
                success: true,
                data: { token }
            });
        })
        .catch(error => {
            res.send({
                success: false,
                message: error.message
            })
        })
};

const register = async (req, res) => {
    const email = req.body.email;
    return await userService.getUserByEmail(email || '')
    .then(exists => {
        if (exists) {
            return res.send({
                success: false,
                message: `Registration failed. User with this email already registered`
            });
        }
        const user = {
            email: email,
            password: bcrypt.hashSync(req.body.password, parseInt(process.env.SALTROUNDS))
        };
        return userService.addUser(user)
        .then(() => {
            res.send({
                success: true
            });
        });
    })
};

module.exports = {
    login: login,
    register: register
};