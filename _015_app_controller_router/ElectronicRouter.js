var express = require('express');
var router = express.Router();
var controller = require('./ElectronicController');

router.get('/electronic', controller.electronic);
router.get('/electronic/computer', controller.computer);

module.exports = router;