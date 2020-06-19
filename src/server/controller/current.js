const {
  getCity,
  getLocation
} = require('../../lib/ipdata.js');

const {
  getWeatherByCity
} = require('../../lib/weather.js');

/**
 * Current controller.
 * @param {object} req request object.
 * @param {object} res response object.
 * @returns {Promise}.
 */
const current = async (req,res, next, city=false)=>{

  try {

    //Get the current city or the location info.
    const location = await (city?getCity():getLocation());
    
    //Get the city name.
    const cityName = city?location:location.city;

    //Get the weather condition of the city.
    const weatherInfo = await getWeatherByCity(cityName);

    res.status(200).json({
      city: location,
      weather: weatherInfo
    });

  } catch (error) {

    //Send to error middleware.
    next(error);
   
  }

};

module.exports = current;