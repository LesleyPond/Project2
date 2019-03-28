const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const db = require('../models');

const authenticate = async params => {
    return await db.Users.findOne({
        where: {
            email: params.email
        },
        raw: true
    }).then(user => {
        if (!user) 
            throw new Error(`Authentication failed.  User not found.`);
        if (!bcrypt.compareSync(params.password || '', user.password))
            throw new Error(`Authentication failed. Wrong password.`);
        const payload = {
            email: user.email,
            id: user.id,
            time: new Date()
        };
        let token = jwt.sign(payload, process.env.JWT_ENCRYPTION, {
            expiresIn: process.env.JWT_EXPIRY
        });
        return token;
    });
    
};

module.exports = {
    authenticate: authenticate
};