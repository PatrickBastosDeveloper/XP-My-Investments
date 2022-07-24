const loginRouteDoc = require('../router/login.doc');
const stocksRouteDoc = require('../router/stocks.doc');

const swaggerConfig = {
  openapi: '3.0.0',
  info: {
    title: 'API XP-My-Investments',
    version: '0.0.1',
    contact: {
      name: 'Patrick Bastos',
      email: 'patrickbastosc@gmail.com',
    },
    description:
      'API desenvolvida para retornar no formato JSON dados de transações de compra e venda de ações, e algumas funcionalidades de conta digital.',
  },
  servers: [
    {
      url: 'http://localhost:3000',
      description: 'Local dev',
    },
    {
      url: 'https://xp-my-investments.herokuapp.com',
      description: 'Local prod',
    },
  ],
  components: {
    securitySchemes: {
      bearerAuth: {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
      },
    },
  },
  tags: [
    {
      name: 'Login',
      description: 'Rota de login para os usuários',
    },
    {
      name: 'Stocks',
      description: 'Rota de informações sobre as ações e empresas',
    },
  ],
  paths: { ...loginRouteDoc, ...stocksRouteDoc },
};

module.exports = swaggerConfig;
