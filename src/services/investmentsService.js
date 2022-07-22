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
  // busquei o ticker
  const stocks = await Stock.findOne( { where: { ticker } } );
  // busquei o id do investidor e da ação
  const StocksSell = await Investment.findOne({
    where: { investorId: investorId, stockId: stocks.stockId,},
  } );
  // verifiquei se a ação vendida existe na carteira do investidor
  if(!StocksSell){
    throw new HttpException(400, 'This stocks not exist.');
  }
  if(qttStocksSell > StocksSell.qttInvestorStock ) { // verifiquei se a quantidade de ações vendida é maior que a quantidade que tem na carteira.
    throw new HttpException(400, 'Number of stocks less than available in the wallet.');
  }
  // Atualizei a quantidade de ações na carteira
  await StocksSell.update({
    qttInvestorStock: StocksSell.qttInvestorStock - qttStocksSell
  } );
  await stocks.update( {
    qttStocksCompany: stocks.qttStocksCompany + qttStocksSell
  })
  // busquei o investidor
  const investor = await Investor.findOne({
    where: { investorId: investorId },
  } );
  // Descobri o valor adquirido na venda
  const valStockSell = qttStocksSell * value;
  await investor.update({
    accountBalance: Number(investor.accountBalance) + valStockSell
  } );
  //qttstockinvestor = 105 accountBalance = 12000 petrobras=206758
  return `You sell ${ qttStocksSell } stocks of ${ ticker } for R$ ${ value }. Your account balance now is r$ ${ investor.accountBalance }`;
}

module.exports = {buyStocksService, sellStocksService};
