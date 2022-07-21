'use strict';

module.exports = (sequelize, DataTypes) => {
  const InvestorTable = sequelize.define(
    'Investor',
    {
      investorId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      investorName: DataTypes.STRING,
      accountBalance: DataTypes.DECIMAL,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
    },
    {
      underscored: true,
      timestamps: false,
      tableName: 'Investors',
    }
  );

  return InvestorTable;
};
