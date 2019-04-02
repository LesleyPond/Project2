const jwt = require('jsonwebtoken');

const checkAuth = (req, res, next) => {
  const token = req.cookies.jwt;
  if (!token) {
    return res.status(403).send({auth: false, message: 'No token provided.'});
  };
  jwt.verify(token, process.env.JWT_ENCRYPTION, (error, decoded) => {
    if (error) {
      return res.status(403)
          .send(
              {auth: false, message: `Failed to authenticate token. ${error}`});
    }

    req.user = {
      email: decoded.email,
      id: decoded.id}; next();
  });
};

module.exports = {
  checkAuth: checkAuth,
};
