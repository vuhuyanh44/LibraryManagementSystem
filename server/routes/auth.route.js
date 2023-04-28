var express = require('express');
var router = express.Router();
let authController = require('../controllers/authController')

//
router.post('/auth', authController.register);

module.exports = router;