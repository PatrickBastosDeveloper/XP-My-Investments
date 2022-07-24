const {
  sequelize,
  dataTypes,
  checkModelName,
  checkPropertyExists,
} = require('sequelize-test-helpers');

const InvestmentModel = require('../src/database/models/investment');

describe('O model de Investment', function () {
  const Investment = InvestmentModel(sequelize, dataTypes);
  const investment = new Investment();

  describe('possui o nome "Investment"', () => {
    checkModelName(Investment)('Investment');
  });

  describe('possui as propriedades definidas pelo modelo lógico para a entidade Investment', () => {
    ['qttInvestorStock'].forEach(checkPropertyExists(investment));
  });
});