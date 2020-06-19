//Include api modules.
const http    = require('http');
const express = require('express');
const config  = require('config');

//Define routes and events
const routes = require('./routes');
const events = require('./events.js');

//Get ip/port from config.
const {
  port
} = config.get('server');

//Start Express-js.
const app    = express();
const server = http.createServer(app);

//Bind the api routes.
app.use('/v1',routes.v1);
app.use('/health',routes.healh);

//Start listen mode.
app.listen(port,()=>events.onListen(port));

/*
//Define server "special" event to handle situations.
server.on('error',   events.onServerError);
process.on('SIGINT', ()=>events.onProcessKill(server));
process.on('SIGTERM',()=>events.onProcessKill(server));
process.on('unhandledRejection', events.onException);
process.on('uncaughtException',  (err)=>events.onException(err));
*/