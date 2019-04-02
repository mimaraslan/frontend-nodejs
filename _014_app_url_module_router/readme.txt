DEMO 14 - ROUTER AND CONTROLLER

_014_app_url_module_router/ElektronikController.js
-------------------------------------------------
var path = require('path');
var express = require('express');
var router = express.Router();

module.exports.electronic=function(req, res){
    res.sendFile(path.join(__dirname, 'electronic.html'))
    console.log("electronic module invoked");
}

module.exports.computer=function(req, res){
    res.sendFile(path.join(__dirname,'computer.html'))
    console.log("computer module invoked");
}

router.get('/electronic', module.exports.electronic);
router.get('/electronic/computer', module.exports.computer);
module.exports = router;


TERMINAL
cd ..
cd _014_app_url_module_router
npm install -g nodemon
npm install
npm install --save path
npm install --save express 
npm start
