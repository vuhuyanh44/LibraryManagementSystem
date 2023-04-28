var express = require('express');
var router = express.Router();
let repositoryController = require('../controllers/repositoryController')

//
router.post('/repository', repositoryController.createNewRepository);

module.exports = router;