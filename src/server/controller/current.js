const {
  fetchConditions
} = require('../../services/current.js');

/**
 * Current controller.
 * @param {object} req request object.
 * @param {object} res response object.
 * @returns {Promise}.
 */
const current = async (req,res, next, city=false)=>{

  try {

    const response = await fetchConditions(city);
    res.status(200).json(response);

  } catch (error) {

    //Send to error middleware.
    next(error);
   
  }

};

module.exports = current;