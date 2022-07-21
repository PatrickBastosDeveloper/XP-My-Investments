const { default: axios } = require('axios');
const rescue = require('express-rescue');
const buyStocksService = require('../services/investmentsServer');

const buyStocksController = rescue(async (req, res) => {
  const { investorId, ticker, qttStocksBuy } = req.body;
  const { data } = await axios(
    `https://api-cotacao-b3.labdo.it/api/cotacao/cd_acao/${ticker}/1`
  );
  const [item] = data;
  const value = item.vl_fechamento;

  const buy = await buyStocksService({ investorId, ticker, qttStocksBuy, value });
  res.status(200).json(buy);
});

module.exports = buyStocksController;
