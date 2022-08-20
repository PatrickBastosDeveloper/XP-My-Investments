'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Stocks', {
      stockId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
        field: 'stock_id',
      },
      companyName: {
        type: Sequelize.STRING,
        field: 'company_name',
      },
      ticker: {
        type: Sequelize.STRING,
        field: 'ticker',
      },
      qttStocksCompany: {
        type: Sequelize.INTEGER,
        field: 'qtt_stocks_company',
      },
    });
  },
  async down(queryInterface) {
    await queryInterface.dropTable('Stocks');
  },
};
