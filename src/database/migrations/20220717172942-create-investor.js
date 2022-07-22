'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Investors', {
      investorId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
        field: 'investor_id',
      },
      investorName: {
        type: Sequelize.STRING,
        field: 'investor_name',
      },
      accountBalance: {
        type: Sequelize.DECIMAL(10, 2),
        field: 'account_balance',
        allowNull: false,
        get() {
          return parseFloat(this.getDataValue('accountBalance'));
        },
        dialectOptions: {
          decimalNumbers: true
      },
      },
      email: {
        allowNull: false,
        type: Sequelize.STRING,
        field: 'email',
      },
      password: {
        allowNull: false,
        type: Sequelize.STRING,
        field: 'password',
      },
    });
  },
  async down(queryInterface, _Sequelize) {
    await queryInterface.dropTable('Investors');
  },
};
