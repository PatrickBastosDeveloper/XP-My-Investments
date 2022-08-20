'use strict';

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('Stocks', [
      {
        company_name: 'AMBEV',
        ticker: 'ABEV3',
        qtt_stocks_company: 45722,
      },
      {
        company_name: 'BRADESCO',
        ticker: 'BBDC3',
        qtt_stocks_company: 60500,
      },
      {
        company_name: 'LOCALIZA',
        ticker: 'RENT3',
        qtt_stocks_company: 25375,
      },
      {
        company_name: 'PETROBRAS',
        ticker: 'PETR4',
        qtt_stocks_company: 206758,
      },
      {
        company_name: 'VALE',
        ticker: 'VALE3',
        qtt_stocks_company: 198880,
      },
      {
        company_name: 'BANCO DO BRASIL',
        ticker: 'BBAS3',
        qtt_stocks_company: 102201,
      },
    ]);
  },
  down: async (queryInterface) => {
    await queryInterface.bulkDelete('Stocks', null, {});
  },
};
