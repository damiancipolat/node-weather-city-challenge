const ipapi = require('./lib/ipdata.js');

ipapi.getLocation().then(a=>console.log(a)).catch(e=>console.error(e));

ipapi.getCity().then(a=>console.log(a)).catch(e=>console.error(e));