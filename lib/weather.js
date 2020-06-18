const fetch = require('node-fetch');

const apiKey = 'fb24bdedbc06fec558d52fc020795211';
const weatherCityUrl = 'https://api.openweathermap.org/data/2.5/weather?q=:city&appid=:key';
const forecastCityUrl = 'https://api.openweathermap.org/data/2.5/forecast?q=:city&appid=:key';

/**
 * Make a request to openweather.com and fetch current conditions of a city.
 * @param {string} city
 * @returns {promise}
 */
const getWeatherByCity = async (cityName)=>{

  //Replace the parameters in the url.
  const cityUrl = weatherCityUrl.replace(':city',cityName).replace(':key',apiKey);
  
  //Encode the url to make the request.
  const url = encodeURI(cityUrl);
  
  //Make the request using apikey, and parse as json.
  const result = await fetch(url);
  return await result.json();

}

/**
 * Make a request to openweather.com and fetch current conditions of a city.
 * @param {string} city
 * @returns {promise}
 */
const getForecastByCity = async (cityName)=>{

  //Replace the parameters in the url.
  const cityUrl = forecastCityUrl.replace(':city',cityName).replace(':key',apiKey);
  
  //Encode the url to make the request.
  const url = encodeURI(cityUrl);
  
  //Make the request using apikey, and parse as json.
  const result = await fetch(url);
  return await result.json();

}

module.exports = {
  getWeatherByCity,
  getForecastByCity
};