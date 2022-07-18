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
        primaryKey: true,
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
        primaryKey: true,
      },
      qtt_investor_stock: {
        type: Sequelize.INTEGER,
      },
    });
  },
  async down(queryInterface, _Sequelize) {
    await queryInterface.dropTable('Investments');
  },
};
