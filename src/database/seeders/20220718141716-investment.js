'use strict';

module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('Investments', [
      {
        investor_id: 1,
        stock_id: 2,
        qtt_investor_stock: 40,
      },
      {
        investor_id: 1,
        stock_id: 5,
        qtt_investor_stock: 10,
      },
      {
        investor_id: 1,
        stock_id: 6,
        qtt_investor_stock: 13,
      },
      {
        investor_id: 2,
        stock_id: 1,
        qtt_investor_stock: 66,
      },
      {
        investor_id: 2,
        stock_id: 4,
        qtt_investor_stock: 105,
      },
      {
        investor_id: 3,
        stock_id: 3,
        qtt_investor_stock: 35,
      },
      {
        investor_id: 3,
        stock_id: 1,
        qtt_investor_stock: 25,
      },
    ]);
  },
  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('Investments', null, {});
  },
};
