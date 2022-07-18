'use strict';

module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('Investors', [
      {
        investor_name: 'Oliver Bastos',
        account_balance: 10000,
        email: 'oliver@email.com',
        password: 'Oliver1@',
      },
      {
        investor_name: 'Benicio Duarte',
        account_balance: 12000,
        email: 'benicio@email.com',
        password: 'B3nicio123',
      },
      {
        investor_name: 'Arthur Pires',
        account_balance: 5000,
        email: 'oliver@email.com',
        password: '@rthuR123',
      },
    ]);
  },
  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('Investors', null, {});
  },
};
