var express = require('express');
var router = express.Router();
let bookLineController = require('../controllers/bookLineController')

//
router.post('/book-line', bookLineController.createNewBookLine);
router.put('/book-line/:id',bookLineController.updateBookLine);
router.get('/book-line', bookLineController.getAllBookLine);

module.exports = router;