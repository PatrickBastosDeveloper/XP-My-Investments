const rescue = require('express-rescue');
const {
  getAllStocksService,
  /* getByStockService, */
} = require('../services/stocksService');

const getAllStocksController = rescue(async (req, res) => {
  const allStocks = await getAllStocksService();

  res.status(200).json(allStocks);
});

// const getByStockController = rescue(async (req, res) => {
//   const { ticker } = req.param;
//   const allStocks = await getByStockService(ticker);

//   res.status(200).json(allStocks);
// });

module.exports = { getAllStocksController/* , getByStockController */ };
