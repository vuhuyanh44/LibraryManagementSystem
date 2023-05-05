var express = require('express');
var router = express.Router();
let repositoryController = require('../controllers/repositoryController')

//
router.post('/repository', repositoryController.createNewRepository);
router.get('/repository', repositoryController.getAllRepository)
router.put('/repository/:id', repositoryController.updateRepository)
module.exports = router;