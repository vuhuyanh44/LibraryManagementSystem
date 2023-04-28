var express = require('express');
var router = express.Router();
let roleController = require('../controllers/roleController')

//
router.post('/role', roleController.createNewRole);

module.exports = router;