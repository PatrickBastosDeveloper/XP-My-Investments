'use strict';
module.exports = (sequelize, DataTypes) => {
  const InvestmentTable = sequelize.define('Investment', {
    qtt_investor_stock: DataTypes.INTEGER,
    timestamps: false,
  });

  InvestmentTable.associate = (models) => {
    models.Stock.belongsToMany(models.Investor, {
      as: 'investors',
      through: InvestmentTable,
      foreignKey: 'stock_id',
      otherKey: 'investor_id',
    });
    models.Investor.belongsToMany(models.Stock, {
      as: 'stocks',
      through: InvestmentTable,
      foreignKey: 'investor_id',
      otherKey: 'stock_id',
    });
  };
  
  return InvestmentTable;
};
