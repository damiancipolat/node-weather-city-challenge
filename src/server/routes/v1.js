const express = require('express');
const router  = express.Router();

//Get the routes.
const health   = require('../controller/health.js');
const current  = require('../controller/home.js');
const location = require('../controller/location.js');
const forecast = require('../controller/home.js');
const notFound = require('../controller/not-found.js');

//Bind routes with controller.
router.get('/health',health);
router.get('/location',location);
router.get('/current',current);
router.get('/current/city',current);
router.get('/forecast',forecast);
router.get('/forecast/city',current);
router.get('*',notFound);

module.exports = router;