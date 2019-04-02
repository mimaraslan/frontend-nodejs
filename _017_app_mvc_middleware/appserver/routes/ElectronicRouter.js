var express = require('express');
var router = express.Router();
var controller = require('../controller/ElectronicController');

router.use(function(req, res, next){
    req.myMessage= 'Midleware Test from ElectronicController';
    next();
    });
    
router.get('/electronic', controller.electronic);
router.get('/electronic/computer', controller.computer);

module.exports = router;