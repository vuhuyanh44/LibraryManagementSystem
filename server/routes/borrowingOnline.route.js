var express = require('express');
var router = express.Router();
let borrowingOnlineController = require('../controllers/borrowingOnlController')

//
router.post('/borrowing-online', borrowingOnlineController.createNewBorrowingOnl);

module.exports = router;