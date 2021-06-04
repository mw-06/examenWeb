
const express = require('express');

const routes = express.Router();

const {listar, crear} = require('../controllers/controller');

routes.get('/', listar);
routes.post('/crear', crear);


module.exports = routes;
