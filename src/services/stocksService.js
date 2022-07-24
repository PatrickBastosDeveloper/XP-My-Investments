const { Stock } = require('../database/models');
const getValueStock = require('../utils/axiosStocks');

const getCurrentValue = async (stocks, position, newStocks) => {
  const stock = stocks[position]
  const currentValue = await getValueStock(stock.ticker)
  newStocks.push({ ...stock.dataValues, currentValue })
  position = position + 1
  if (stocks.length > position)
      return await getCurrentValue(stocks, position, newStocks)
  else
      return newStocks
}
const getAllStocksService = async () => {
  const stocks = await Stock.findAll();
  const result = await getCurrentValue(stocks, 0, [])
  return result;
};

const getByStockService = async ( ticker, value ) => {
  const stocks = await Stock.findOne( {
    where: { ticker: ticker },
    attributes: { exclude: [ 'stockId' ] }
    })

  return {...stocks.dataValues, value}
};
module.exports = { getAllStocksService , getByStockService  };
