const db = require('../models');

const getUserByEmail = (email) => db.User.findOne({
  where: {email_address: email}});

const createUser = (user) => db.User.create(user);

const changePassword = (id, password) => db.User.update({
  password: password}, {where: {id: id}});

module.exports = {
  getUserByEmail: getUserByEmail,
  createUser: createUser,
  changePassword: changePassword,
};
