//Error handler middleware.
const errorHandler = (req, res, next) => {  
  console.log('AAAA',req);
  res.status(500).json({mock:true});
}

module.exports = {
  errorHandler
};