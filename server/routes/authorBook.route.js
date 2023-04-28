var express = require('express');
var router = express.Router();
let authorBookController = require('../controllers/authorBookController')

//
router.post('/author-book', authorBookController.createNewAuthorBook);

module.exports = router;