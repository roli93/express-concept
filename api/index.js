import express from 'express';
import routes from './routes.js';

var api = express();

api.use(( req, res, next ) => {
  console.log(req.body);
  next();
});

api.use('/', routes);

export default api;
