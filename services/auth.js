const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const db = require('../models');

const authenticate = async (params) => {
  return await db.User.findOne({
    where: {
      email_address: params.email_address,
    },
    raw: true,
  }).then((user) => {
    if (!user) {
      throw new Error(`Authentication failed.  User not found.`);
    }
    if (!bcrypt.compareSync(params.password || '', user.password)) {
      throw new Error(`Authentication failed. Wrong password.`);
    }
    const payload = {
      email_address: user.email_address,
      id: user.id,
      time: new Date(),
    };
    const token = jwt.sign(payload, process.env.JWT_ENCRYPTION, {
      expiresIn: process.env.JWT_EXPIRY,
    });
    return {token: token, payload: payload};
  });
};

module.exports = {
  authenticate: authenticate,
};
