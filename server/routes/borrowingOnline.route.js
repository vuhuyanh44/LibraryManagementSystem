var express = require('express');
var router = express.Router();
let borrowingOnlineController = require('../controllers/borrowingOnlController')
let authenticate = require('../middlewares/authenticate')

//
router.post('/borrowing-online', authenticate.authenticate, borrowingOnlineController.createNewBorrowingOnl);
router.get('/borrowed-book/', authenticate.authenticate, borrowingOnlineController.getBorrowedBookOnline)

router.get(
    "/borrowOnlCount/date",
    borrowingOnlineController.getBorrowOnlCountByDateRange
  );

module.exports = router;