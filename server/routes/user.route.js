var express = require('express');
var router = express.Router();
let LoginController = require('../controllers/userController')
//
router.post('/login', LoginController.login);

module.exports = router;