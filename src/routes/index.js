const { Router } = require('express');

const uploadRoutes = require('./message');
const { response } = require('../helpers');

const routes = Router();

routes.use('', uploadRoutes);

routes.use((_, res) => {
  response(res, { status: false, message: 'Route not found' }, 404);
});

module.exports = routes;
