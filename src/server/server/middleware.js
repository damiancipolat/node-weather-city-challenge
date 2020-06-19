const httpContext = require('express-http-context');
const routes      = require('./routes/index.js');
const bodyParser  = require('body-parser');
const config      = require('config');
const compression = require('compression');
const {errorHandler} = require('@tf/express-error-middleware');

//Api rest compression response from configuration.
const useCompress = config.get('compression');

//Golden API
const logger = require('@common/node-logger/src/logger');
const expressLogger = require('@common/node-logger/src/expressLogger');
const tokenDecoderMiddleware = require('@common/token-decoder')({decode: true,verify: false});
const transactionAndConsumerTrackingMiddleware = require('@common/transaction-and-consumer-tracking');

//Error handler middleware.
const errorHandlerMiddleware = (err, req, res, next) => errorHandler(logger.error)(err, req, res, next);

//Compression middleware.
const shouldCompress = (req,res) =>!!((req.headers&&req.headers['x-no-compression'])||(useCompress===false));

const applyMidleware = (app) => {

  //Add bodyparser and CORS.
  app.use(bodyParser.json());

  //Compression.
  app.use(compression({filter: shouldCompress,threshold: 0}));

  //Golden API
  app.use(expressLogger);
  app.use(httpContext.middleware);
  app.use(tokenDecoderMiddleware);
  app.use(transactionAndConsumerTrackingMiddleware);

  //Bind app with server routes.
  routes.bind(app);

  //Error handler middleware
  app.use(errorHandlerMiddleware);

};

module.exports = { 
  applyMidleware,
  errorHandlerMiddleware,
  shouldCompress
};