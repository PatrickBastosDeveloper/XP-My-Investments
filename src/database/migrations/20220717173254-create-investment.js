'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Investments', {
      investorId: {
        type: Sequelize.INTEGER,
        field: 'investor_id',
        references: {
          model: 'Investors',
          key: 'investor_id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      stockId: {
        type: Sequelize.INTEGER,
        field: 'stock_id',
        references: {
          model: 'Stocks',
          key: 'stock_id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      qttInvestorStock: {
        type: Sequelize.INTEGER,
        field: 'qtt_investor_stock'
      },
    });
  },
  async down(queryInterface) {
    await queryInterface.dropTable('Investments');
  },
};
