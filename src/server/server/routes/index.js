const health = require('./health.js');
const home	 = require('./home.js');

//Bind path with route.
const bind = app => {

	app.use('/health',health);
	app.use('/home',home);
	
}
  
module.exports = {
  bind
} 