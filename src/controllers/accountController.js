const rescue = require('express-rescue');
const {
  accountDepositService,
  withdrawService,
  getAccountBalanceService,
} = require('../services/accountService');

const accountDepositController = rescue(async (req, res) => {
  const { investorId, value } = req.body;

  const deposit = await accountDepositService({ investorId, value });

  res.status(200).json(deposit);
});

const withdrawController = rescue(async (req, res) => {
  const { investorId, value } = req.body;

  const withdraw = await withdrawService({ investorId, value });

  res.status(200).json(withdraw);
});

const getAccountBalanceContoller = rescue(async (req, res) => {
  const { id } = req.params;

  const balance = await getAccountBalanceService(id);

  res.status(200).json(balance);
});

module.exports = {
  accountDepositController,
  withdrawController,
  getAccountBalanceContoller,
};
