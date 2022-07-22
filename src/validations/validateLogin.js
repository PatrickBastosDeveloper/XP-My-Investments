const rescue = require('express-rescue');
const { HttpException } = require('../utils/index');

const emailVerification = (email) => {
  const validationRgx = /\S+@\S+\.\S+/;
  return validationRgx.test(email);
};

const MIN_CHARACTERS = 6;

const isValideLogin = rescue((req, _res, next) => {
  const { email, password } = req.body;
  if (!email) {
    throw new HttpException(400, 'Invalid email address.');
  }
  if (!password) {
    throw new HttpException(400, 'Invalid password.');
  }
  if (!emailVerification(email)) {
    throw new HttpException(400, 'Invalid email format.');
  }
  if (password.length < MIN_CHARACTERS) {
    throw new HttpException(400, 'Your password need be at least 8 characters long.');
  }

  next();
});

module.exports = isValideLogin;
