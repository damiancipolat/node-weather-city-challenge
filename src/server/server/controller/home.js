const createError = require('http-errors');
const assert      = require('assert');
const logger = require('@common/node-logger/src/logger');
const userData 	  = require('@common/token-decoder/src/userDataContext');

const {
  fetchHomeData
} = require('../../services/homeService.js');

/*
	Extract the clientId from the http-context
	Params
		userDataContes: token-decoder user context.
	Return
		string
*/
const getClientId = userDataContext => {
  const context = userDataContext && userDataContext.get();
  const payload = context && context.payload && context.payload["https://naranja.com/info"];
  return payload && payload.client_id;
}

/*
  Home endpoint controller
  Params
    req:{expressjs request object}
    res:{expressjs response object}
    next:...  
  Return
    Promise
*/
const home = async (req,res,next)=>{  

  try{

		const clientId = getClientId(userData); 
		
		//Validate if client id is in header.
		assert(clientId, createError.BadRequest());
  
    
    //Get home data from service.
    const result = await fetchHomeData(clientId,req.headers.authorization);

    //Return data and handle http status code.
    res.status(result.httpCode).json(result);

  } catch(errObj){
    next(errObj);
  }

}

module.exports = home