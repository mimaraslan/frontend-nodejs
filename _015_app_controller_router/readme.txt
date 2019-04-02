DEMO 15 - ROUTER AND CONTROLLER

_015_app_controller_router/ElectronicRouter.js
-------------------------------------------------
var express = require('express');
var router = express.Router();
var controller = require('./ElectronicController');

router.get('/electronic', controller.electronic);
router.get('/electronic/computer', controller.computer);

module.exports = router;


TERMINAL
cd ..
cd _015_app_controller_router
npm install -g nodemon
npm install
npm install --save path
npm install --save express 
npm start