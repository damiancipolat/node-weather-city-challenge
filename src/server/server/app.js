//Include api modules.
const http       = require('http');
const express    = require('express');
const config     = require('config');
const { applyMidleware } = require('./middleware');

//Define events
const events = require('./events.js');

//Get ip/port from config.
const port = config.get('port')||80;

//Start Express-js.
const app    = express();
const server = http.createServer(app);

//Apply midlewares and routes.
applyMidleware(app);

//Start listen mode.
app.listen(port,()=>events.onListen(port));

//Define server "special" event to handle situations.
server.on('error',   events.onServerError);
process.on('SIGINT', ()=>events.onProcessKill(server));
process.on('SIGTERM',()=>events.onProcessKill(server));
process.on('unhandledRejection', events.onException);
process.on('uncaughtException',  (err)=>events.onException(err));