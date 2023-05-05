var express = require('express');
var router = express.Router();
let bookController = require('../controllers/bookController')

router.post('/book', bookController.createNewBook);
router.get('/book', bookController.getAllBook)
router.put('/book/:id',bookController.updateBook)
router.get('/book/search', bookController.searchBook)
router.get('/book/filter', bookController.filterBookByCategory)
router.get('/book/:id', bookController.getBookDetail)
router.get('/book/amount-book/:id',bookController.countBookIdleByBookLineID)
module.exports = router;