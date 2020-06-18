const ipapi = require('ipapi.co');

/**
 * Return "ipapi.co" location data from the current IP
 * @returns {Promise} Represent ip-api geografic object.
 */
const getLocation = ()=>{

  return new Promise((resolve,reject)=>{

    ipapi.location((ipInfo,error)=>{

      if (error)
        reject(error);
      else
        resolve(ipInfo);

    });

  });

}

/**
 * Return "ipapi.co" CITY from the current IP
 * @returns {Promise} Represent ip-api city string.
 */
const getCity = ()=>{

  return new Promise((resolve,reject)=>{

    ipapi.location((ipInfo,error)=>{

      if (error)
        reject(error);
      else
        resolve(ipInfo);

    },'','','city');

  });

}

module.exports = {
  getLocation,
  getCity
};