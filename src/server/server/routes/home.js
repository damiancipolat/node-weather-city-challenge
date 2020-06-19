const express = require('express');
const router  = express.Router();

//Include controller.
const home = require('../controller/home.js');

router.get('/',home);

module.exports = router;