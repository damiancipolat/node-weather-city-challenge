const ipapi = require('./lib/ipdata.js');

const {
    getWeatherByCity,
    getForecastByCity
} = require('./lib/weather.js');

//ipapi.getLocation().then(a=>console.log(a)).catch(e=>console.error(e));
//ipapi.getCity().then(a=>console.log(a)).catch(e=>console.error(e));

getWeatherByCity('Buenos Aires').then(a=>console.log(a)).catch(e=>console.error(e));
//getForecastByCity('Buenos Aires').then(a=>console.log(a)).catch(e=>console.error(e));
//fb24bdedbc06fec558d52fc020795211
