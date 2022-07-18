'use strict';

module.exports = (sequelize, DataTypes) => {
  const InvestorTable = sequelize.define(
    'Investor',
    {
      investor_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      investor_name: DataTypes.STRING,
      account_balance: DataTypes.DECIMAL,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
    },
    {
      timestamps: false,
      tableName: 'Investors',
      underscored: true,
    }
  );

  return InvestorTable;
};
