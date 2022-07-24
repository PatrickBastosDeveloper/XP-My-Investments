const rescue = require('express-rescue');
const { HttpException } = require('../utils/index');
const { verifyToken } = require('../utils/index');

const validateToken = rescue(async (req, res, next) => {
  const bearer = req.headers.authorization;
  const [ , tokenJWT ] = bearer.split( ' ' );
  if (!tokenJWT) {
    throw new HttpException('Token not found', 401);
  }
  const user = await verifyToken(tokenJWT);
  if (!tokenJWT || user === false) {
    throw new HttpException('Expired or invalid token', 401);
  }
  res.locals.users = user;
  next();
});

module.exports = validateToken;