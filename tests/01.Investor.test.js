const {
  sequelize,
  dataTypes,
  checkModelName,
  checkPropertyExists,
} = require('sequelize-test-helpers');

const InvestorModel = require('../src/database/models/investor');

describe('O model de Investor', function () {
  const Investor = InvestorModel(sequelize, dataTypes);
  const investor = new Investor();

  describe('possui o nome "Investor"', () => {
    checkModelName(Investor)('Investor');
  });

  describe('possui as propriedades definidas pelo modelo lógico para a entidade Investors', () => {
    ['investor_id', 'investor_name', 'account_balance', 'email', 'password'].forEach(checkPropertyExists(investor));
  });
});