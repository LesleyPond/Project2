const db = require('../models');

const getUserByEmail = (email) => db.User.findOne({where: {email: email}})

const createUser = (user) => db.User.create(user);

module.exports = {
    getUserByEmail: getUserByEmail,
    createUser: createUser
};