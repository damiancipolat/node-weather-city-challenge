const fetch  = require('node-fetch');
const config = require('config');
const createError = require('http-errors');

const {
  apiKey,
  baseUrl
} = config.get('openWeather');

/**
 * Check if the status code is in the error range.
 * @param {string} http status code.
 * @returns {boolean}
 */
const isHttpError = (status)=> (new RegExp(/^5\d{2}$|^4\d{2}$/)).test(status);

/**
 * Make a request to openweather.com and fetch current conditions of a city.
 * @param {string} city
 * @returns {promise}
 */
const getWeatherByCity = async (cityName)=>{

  const url = encodeURI(`${baseUrl}/weather?q=${cityName}&appid=${apiKey}`);
  const result = await fetch(url);

  const {
    status
  } = result;

  //Check if the request is not success, launch a exception.
  if (status&&isHttpError(status))
    throw createError(status,`Request not succes - url:${url}`);

  return await result.json();

}

/**
 * Make a request to openweather.com and fetch current conditions of a city.
 * @param {string} city
 * @returns {promise}
 */
const getForecastByCity = async (cityName)=>{

  const url = encodeURI(`${baseUrl}/forecast?q=${cityName}&appid=${apiKey}`);
  const result = await fetch(url);

  const {
    status
  } = result;  

  //Check if the request is not success, launch a exception.
  if (status&&isHttpError(status))
    throw createError(result.status,`Request not succes - url:${url}`);

  return await result.json();

}

module.exports = {
  getWeatherByCity,
  getForecastByCity
};