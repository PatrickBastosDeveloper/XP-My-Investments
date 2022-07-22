const { default: axios } = require('axios');

const getValueStock = async ( ticker ) => {
  const { data } = await axios(
    `https://api-cotacao-b3.labdo.it/api/cotacao/cd_acao/${ticker}/1`
  );
  const [item] = data;

  return item.vl_fechamento;
};

module.exports = getValueStock;
