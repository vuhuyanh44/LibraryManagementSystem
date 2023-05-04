var express = require('express');
var router = express.Router();
let category = require('../controllers/categoryController')

router.post('/category', category.createNewCategory);

module.exports = router;