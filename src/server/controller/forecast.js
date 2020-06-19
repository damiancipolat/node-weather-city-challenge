const {
  fetchForecast
} = require('../../services/forecast.js');

/**
 * Forecast controller.
 * @param {object} req request object.
 * @param {object} res response object.
 * @returns {Promise}.
 */
const forecast = async (req,res,next,city=false)=>{

  try {

    const response = await fetchForecast(city);    
    res.status(200).json(response);

  } catch (error) {

    //Send to error middleware.
    next(error);
   
  }

};

module.exports = forecast;