const swaggerConfig = {
  definition: {
    openapi: '3.0.1',
    info: {
      title: 'API XP-My-Investments',
      description:
        'API desenvolvida para retornar no formato JSON dados de transações de compra e venda de ações, e algumas funcionalidades de conta digital.',
      version: '1.0',
      contact: {
        name: 'Patrick Bastos',
        email: 'patrickbastosc@gmail.com',
      },
    },
    servers: [
      {
        url: 'http://localhost:3000',
        description: 'servidor local',
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
  },
  apis: ['./src/router/index.js'],
};

module.exports = swaggerConfig;
