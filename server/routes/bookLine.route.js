var express = require('express');
var router = express.Router();
let bookLineController = require('../controllers/bookLineController')

//
router.post('/book-line', bookLineController.createNewBookLine);
router.put('/book-line/:id',bookLineController.updateBookLine);

module.exports = router;