const { Investment, Stock, Investor } = require('../database/models');
const { HttpException } = require('../utils/index');

const buyStocksService = async ({investorId, ticker, qttStocksBuy,value}) => {
  const stocks = await Stock.findOne( { where: { ticker } } );
  if ( qttStocksBuy > stocks.qttStocksCompany ) {
    throw new HttpException(400, 'Amount of stocks greater than available.');
  }
  
  const investor = await Investor.findOne({
    where: { investorId: investorId },
  } );
  
  const totalStocksBroker = qttStocksBuy * value;
  
  if (totalStocksBroker > Number(investor.accountBalance)) {
    throw new HttpException(400, 'Insufficient funds.');
  }

  const checkInvestment = await Investment.findOne( {
    where: {
      investorId: investorId,
      stockId: stocks.stockId,
    }
  } )

  let investment = {}
  if(checkInvestment){
    investment = await checkInvestment.update({
      qttInvestorStock: checkInvestment.qttInvestorStock + qttStocksBuy
    });
  }else {
     investment = await Investment.create({
      investorId: investorId,
      stockId: stocks.stockId,
      qttInvestorStock: qttStocksBuy,
    });
  }

  
  await stocks.update({
    qttStocksCompany: stocks.qttStocksCompany - qttStocksBuy,
  });
  await investor.update({
    accountBalance: Number(investor.accountBalance) - totalStocksBroker,
  });
  
  return investment;
};

const sellStocksService = async ( { investorId, ticker, qttStocksSell, value } ) => { 
  const stocks = await Stock.findOne( { where: { ticker } } );
  const StocksSell = await Investment.findOne({
    where: { investorId: investorId, stockId: stocks.stockId,},
  } );

  if(!StocksSell){
    throw new HttpException(400, 'This stocks not exist.');
  }
  if(qttStocksSell > StocksSell.qttInvestorStock ) { 
    throw new HttpException(400, 'Number of stocks less than available in the wallet.');
  }

  await StocksSell.update({
    qttInvestorStock: StocksSell.qttInvestorStock - qttStocksSell
  } );
  await stocks.update( {
    qttStocksCompany: stocks.qttStocksCompany + qttStocksSell
  } )
  
  const investor = await Investor.findOne({
    where: { investorId: investorId },
  } );

  const valStockSell = qttStocksSell * value;
  await investor.update({
    accountBalance: Number(investor.accountBalance) + valStockSell
  } );

  return `You sell ${ qttStocksSell } stocks of ${ ticker } for R$ ${ value }. Your account balance now is r$ ${ investor.accountBalance }`;
}

const getInvestmentsServie = async ( id ) => { 
  const dataInvestor = await Stock.findByPk( id, {
    include: [
      { model: Investor, as: 'investors' },
      {model: Stock, as: 'stocks'}
    ]
  } );
  
  return dataInvestor
}

module.exports = {buyStocksService, sellStocksService, getInvestmentsServie};
