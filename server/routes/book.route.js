var express = require('express');
var router = express.Router();
let bookController = require('../controllers/bookController')

//
router.post('/book', bookController.createNewBook);

module.exports = router;