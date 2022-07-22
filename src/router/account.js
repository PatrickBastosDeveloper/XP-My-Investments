const express = require('express');
const { accountDepositController, withdrawController, getAccountBalanceContoller } = require( '../controllers/accountController' );
const { validateToken } = require( '../middlewares' );

const route = express.Router();

route.post('/account/deposit', validateToken, accountDepositController );
route.post('/account/withdraw', validateToken, withdrawController)
route.get('/account/:id', getAccountBalanceContoller)

module.exports = route;
