const { Investor } = require('../database/models');
const { HttpException, generateJWTToken } = require('../utils/index');

const authenticateUser = async ({ email, password }) => {
  const user = await Investor.findOne({ where: { email, password } });
  if (!user) {
    throw new HttpException(400, 'Invalid fields');
  }

  const token = generateJWTToken(user);

  return token;
};

module.exports = authenticateUser;
