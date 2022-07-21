'use strict';

module.exports = (sequelize, DataTypes) => {
  const StocksTable = sequelize.define(
    'Stock',
    {
      stockId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      companyName: DataTypes.STRING,
      ticker: DataTypes.STRING,
      qttStocksCompany: DataTypes.INTEGER,
    },
    {
      timestamps: false,
      tableName: 'Stocks',
      underscored: true,
    }
  );

  return StocksTable;
};
