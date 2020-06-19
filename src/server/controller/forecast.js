const {
  getCity,
  getLocation
} = require('../../lib/ipdata.js');

const {
  getForecastByCity
} = require('../../lib/weather.js');

/**
 * Forecast controller.
 * @param {object} req request object.
 * @param {object} res response object.
 * @returns {Promise}.
 */
const forecast = async (req,res, next, city=false)=>{

  try {

    //Get the current city or the location info.
    const location = await (city?getCity():getLocation());
    
    //Get the city name.
    const cityName = city?location:location.city;

    //Get the city weather condition for the next 5 days.
    const forecastInfo = await getForecastByCity(cityName);

    res.status(200).json({
      city: location,
      forecast: forecastInfo
    });

  } catch (error) {

    //Send to error middleware.
    next(error);
   
  }

};

module.exports = forecast;