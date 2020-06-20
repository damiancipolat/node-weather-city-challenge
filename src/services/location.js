const {
  getLocation
} = require('../lib/ipdata.js');

/**
 * Location controller.
 */
const fetchLocation = async ()=> await getLocation();

module.exports = {
  fetchLocation
};