const {
  getCity
} = require('../../lib/ipdata.js');

const {
  getWeatherByCity
} = require('../../lib/weather.js');

/**
 * Current controller.
 * @param {object} req request object.
 * @param {object} res response object.
 */
const current = async (req,res, next, city=false)=>{

  try {

    //Get current ip location info, from ipapi.co
    //const location = await getLocation();
    res.status(200).json(true);

  } catch (error) {

    //Send to error middleware.
    next(error);
   
  }

};

module.exports = current;