const {
  getLocation
} = require('../lib/ipdata.js');

/**
 * Location controller.
 * @param {object} req request object.
 * @param {object} res response object.
 */
const fetchLocatioon = async ()=> await getLocation();

module.exports = {
  fetchLocatioon
};