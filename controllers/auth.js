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
    const email = req.body.email_address;
    return await userService.getUserByEmail(email || '')
    .then(exists => {
        if (exists) {
            return res.send({
                success: false,
                message: `Registration failed. User with this email already registered`
            });
        }
        const user = {
            email_address: email,
            password: bcrypt.hashSync(req.body.password, parseInt(process.env.SALTROUNDS))
        };
        return userService.createUser(user)
        .then((data) => {
            
            let token = jwt.sign({email_address: data.email_address, password: data.password}, process.env.JWT_ENCRYPTION, {
                expiresIn: process.env.JWT_EXPIRY
            });
            res.cookie('jwt', token);
            // return token;
            res.send({
                success: true,
                data: data
             });
        })
        .catch(error => {
            res.json({message: `error: ${error}`})
        });
    })
};

module.exports = {
    login: login,
    register: register
};