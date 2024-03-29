const accountRouteDoc = require('./components/account.doc');
const investmentsRouteDoc = require('./components/investments.doc');
const loginRouteDoc = require('./components/login.doc');
const stocksRouteDoc = require('./components/stocks.doc');

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
      url: 'https://xp-my-investments.herokuapp.com',
      description: 'Local prod',
    },
    {
      url: 'http://localhost:3000',
      description: 'Local dev',
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
    {
      name: 'Account',
      description: 'Rota de informações da conta corrente do usuário',
    },
  ],
  paths: {
    ...loginRouteDoc,
    ...stocksRouteDoc,
    ...accountRouteDoc,
    ...investmentsRouteDoc,
  },
};

module.exports = swaggerConfig;
