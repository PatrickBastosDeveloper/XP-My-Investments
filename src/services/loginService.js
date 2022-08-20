const { Investor } = require('../database/models');
const { HttpException, generateJWTToken } = require('../utils/index');

const authenticateUser = async ({ email, password }) => {
  const userEmail = await Investor.findOne({ where: { email } });
  if (!userEmail) {
    throw new HttpException(401, 'Email Address Not Found');
  }

  const userPassword = await Investor.findOne({ where: { password } });
  if (!userPassword) {
    throw new HttpException(401, 'Password Not Found');
  }
  
  const user = await Investor.findOne({ where: { email, password } });

  const token = generateJWTToken(user);

  return token;
};

module.exports = authenticateUser;
