'use strict';

module.exports = (sequelize, DataTypes) => {
  const StocksTable = sequelize.define(
    'Stock',
    {
      stock_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      company_name: DataTypes.STRING,
      ticker: DataTypes.STRING,
      qtt_stocks_company: DataTypes.INTEGER,
    },
    {
      timestamps: false,
      tableName: 'Stocks',
      underscored: true,
    }
  );

  return StocksTable;
};
