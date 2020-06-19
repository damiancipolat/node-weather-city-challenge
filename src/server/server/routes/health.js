const express = require('express');
const router  = express.Router();

//Include controller.
const health = require('../controller/health.js');

//Health endpoint.
router.get('/',health);

module.exports = router;