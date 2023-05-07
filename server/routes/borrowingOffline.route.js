var express = require('express');
var router = express.Router();
let borrowingOfflineController = require('../controllers/borrowingOffController')
const authenticate = require('../middlewares/authenticate')

router.post('/borrowing-offline', authenticate.authenticate, borrowingOfflineController.createNewBorrowingOff);
router.post('/return-book', authenticate.authenticate, borrowingOfflineController.returnBookOffline)
router.get('/get-book-borrowed-offline', authenticate.authenticate, borrowingOfflineController.getAllBookBorrowed)
router.get('/remain-books/:id', borrowingOfflineController.countBookOfflineRemain)
router.get('/remain-in-repo/:id', borrowingOfflineController.countBookByRepo)
module.exports = router;