
/*
  Health
  Params
    req:{expressjs request object}
    res:{expressjs response object}
  Return
    Promise
*/
const health = (req,res)=>{

  res.status(200).json({"status":"OK"});
  
}

  
module.exports = health