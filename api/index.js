import express from 'express';
import routes from './routes.js';
import bodyParser from 'body-parser';

var api = express();

api.use(bodyParser.json())

api.use(( req, res, next ) => {
  console.log(
    (new Date()).toDateString() + ' - ' + req.method + ' to ' + req.originalUrl
  );
  next();
});

api.use('/', routes);

export default api;
