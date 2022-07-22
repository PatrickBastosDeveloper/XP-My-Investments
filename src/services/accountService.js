const { Investor } = require('../database/models');
const { HttpException } = require('../utils/index');

const accountDepositService = async ({ investorId, value }) => {
  if (value <= 0) {
    throw new HttpException(400, 'Invalid value!');
  }

  const investor = await Investor.findOne({
    where: { investorId: investorId },
  });

  await investor.update({
    accountBalance: Number(investor.accountBalance) + Number(value),
  });

  return `You have made a deposit in the amount of R$ ${value}. Your balance now is R$ ${investor.accountBalance}`;
};

const withdrawService = async ({ investorId, value }) => {
  const investor = await Investor.findOne({
    where: { investorId: investorId },
  });
  
  if (value > investor.accountBalance) {
    throw new HttpException(400, 'You do not have enough balance to make this withdrawal.');
  }

  await investor.update({
    accountBalance: Number(investor.accountBalance) - Number(value),
  } );
  
  return `You made a withdrawal of ${value}. Your balance now is R$ ${investor.accountBalance} `
}

const getAccountBalanceService = async ( id ) => {
  const accountBalance = await Investor.findByPk( id, { attributes: { exclude: [ 'password','email' ] } } );

  return accountBalance
}

module.exports = { accountDepositService, withdrawService, getAccountBalanceService };
