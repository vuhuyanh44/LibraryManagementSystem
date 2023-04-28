var express = require('express');
var router = express.Router();
let borrowingOfflineController = require('../controllers/borrowingOffController')

//
router.post('/borrowing-offline', borrowingOfflineController.createNewBorrowingOff);

module.exports = router;