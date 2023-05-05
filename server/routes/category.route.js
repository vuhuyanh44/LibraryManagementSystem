var express = require('express');
var router = express.Router();
let category = require('../controllers/categoryController')

router.post('/category', category.createNewCategory);
router.get('/category', category.getAllCategory)
module.exports = router;