const express = require('express');
const login = require('../controllers/loginController');
const isValideLogin = require( '../validations/validateLogin' );

const route = express.Router();

route.post('/login', isValideLogin, login);

module.exports = route;
