const {
  getLocation
} = require('../../lib/ipdata.js');

/**
 * Location controller.
 * @param {object} req request object.
 * @param {object} res response object.
 */
const location = async (req,res, next)=>{

  try {

    //Get current ip location info, from ipapi.co
    const location = await getLocation();
    res.status(200).json(location);

  } catch (e) {

    //Send to error middleware.
    next(e);
   
  }

};

module.exports = location;