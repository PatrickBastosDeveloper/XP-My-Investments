const jwt = require('jsonwebtoken');

const TOKEN_SECRET = process.env.JWT_SECRET;

const jwtConfig = {
  // expireIn: '15m',
  algorithm: 'HS256',

};

const generateJWTToken = (email, password) => jwt
  .sign({ email, password }, TOKEN_SECRET, jwtConfig);

const verifyToken = async (token) => {
  try {
      return jwt.verify(token, TOKEN_SECRET);
  } catch (error) {
      return false;
  }
};

module.exports = {
  generateJWTToken,
  verifyToken,
};