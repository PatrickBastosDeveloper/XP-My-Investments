const {
  sequelize,
  dataTypes,
  checkModelName,
  checkPropertyExists,
} = require('sequelize-test-helpers');

const StockModel = require('../src/database/models/stock');

describe('O model de Stock', function () {
  const Stock = StockModel(sequelize, dataTypes);
  const stock = new Stock();

  describe('possui o nome "Stock"', () => {
    checkModelName(Stock)('Stock');
  });

  describe('possui as propriedades definidas pelo modelo lógico para a entidade Stocks', () => {
    ['stock_id', 'company_name', 'ticker', 'qtt_stocks_company'].forEach(checkPropertyExists(stock));
  });
});