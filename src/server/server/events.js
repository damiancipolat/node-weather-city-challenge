const logger = require('@common/node-logger/src/logger');
const process = require('process');

//Get from config.
const config  = require('config');
const timeout = config.get('killTimeout');

//On server internal error.
const onServerError = ()=>{

  logger.info('SERVER ERROR');

}

//On server start.
const onListen = (port)=>{

  //TODO: make a better message.
  logger.info('ᕦ(ò_óˇ)ᕤ - The Face');
  logger.info(`Home aggretator API - Running on port: ${port}`);
  
}

//When the process receive kill signal.
const onProcessKill = server =>{
  logger.info('Service termination signal received');
  return new Promise(resolve => {
    setTimeout(() => {
      logger.info('Finishing server');
      return server.close(()=>process.exit(0));
    }, timeout).then(resolve());
  });
}

//When in the server happen a uncaugth exception.
const onException = err =>{
  logger.info(err);
}

module.exports = {
  onListen,
  onProcessKill,
  onServerError,
  onException
};