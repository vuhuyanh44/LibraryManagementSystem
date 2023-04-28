var express = require('express');
var router = express.Router();
let publisher = require('../controllers/publisherController')

//
router.post('/publisher', publisher.createNewPublisher);

module.exports = router;