const fetch  = require('node-fetch');
const config = require('config');

const {
  apiKey,
  baseUrl
} = config.get('openWeather');

const httpSucess = 200;

/**
 * Make a request to openweather.com and fetch current conditions of a city.
 * @param {string} city
 * @returns {promise}
 */
const getWeatherByCity = async (cityName)=>{

  const url    = encodeURI(`${baseUrl}/weather?q=${cityName}&appid=${apiKey}`);
  const result = await fetch(url);

  if (result&&result.status!=httpSucess)
    throw {code:result.status, detail:'Request is not OK!'};

  return await result.json();

}

/**
 * Make a request to openweather.com and fetch current conditions of a city.
 * @param {string} city
 * @returns {promise}
 */
const getForecastByCity = async (cityName)=>{

  const url    = encodeURI(`${baseUrl}/forecast?q=${cityName}&appid=${apiKey}`);
  const result = await fetch(url);

  if (result&&result.status!=httpSucess)
    throw {code:result.status, detail:'Request is not OK!'};

  return await result.json();

}

module.exports = {
  getWeatherByCity,
  getForecastByCity
};