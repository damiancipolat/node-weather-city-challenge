const process = require('process');
const config  = require('config');

const {
  killTimeout
} = config.get('server');

//On server internal error.
const onServerError = ()=>{

  console.info('SERVER ERROR');

}

//On server start.
const onListen = (port)=>{

  console.info('NODEJS challenge');
  console.info(`City weather API - Running on port: ${port}`);
  
}

//When the process receive kill signal.
const onProcessKill = server =>{
  
  console.info('Service termination signal received');
  
  setTimeout(() => {

    console.info('Finishing server');
    server.close(()=>process.exit(0));

  }, killTimeout);

}

//When in the server happen a uncaugth exception.
const onException = err =>{
  console.info(err);
}

module.exports = {
  onListen,
  onProcessKill,
  onServerError,
  onException
};