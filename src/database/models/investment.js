'use strict';
module.exports = (sequelize, DataTypes) => {
  const InvestmentTable = sequelize.define(
    'Investment',
    {
      qttInvestorStock: DataTypes.INTEGER,
    },
    {
      timestamps: false,
      underscored: true,
      tableName: 'Investments'
    },
  );

  InvestmentTable.associate = (models) => {
    models.Stock.belongsToMany(models.Investor, {
      as: 'investors',
      through: InvestmentTable,
      foreignKey: 'stockId',
      otherKey: 'investorId',
    });
    models.Investor.belongsToMany(models.Stock, {
      as: 'stocks',
      through: InvestmentTable,
      foreignKey: 'investorId',
      otherKey: 'stockId',
    });
  };

  return InvestmentTable;
};
