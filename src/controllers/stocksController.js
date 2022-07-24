const rescue = require('express-rescue');
const { getAllStocksService, getByStockService } = require('../services/stocksService');
const getValueStock = require( '../utils/axiosStocks' );

const getAllStocksController = rescue(async (req, res) => {
  const allStocks = await getAllStocksService();

  res.status(200).json(allStocks);
});

const getByStockController = rescue(async (req, res) => {
  let ticker = req.query.ticker;
  const value = await getValueStock( ticker );
  const allStocks = await getByStockService(ticker, value);

  res.status(200).json(allStocks);
});

module.exports = { getAllStocksController, getByStockController };
