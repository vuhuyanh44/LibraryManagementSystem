var express = require('express');
var router = express.Router();
let authorController = require('../controllers/authorController')

//
router.post('/author', authorController.createNewAuthor);

module.exports = router;