const express = require('express')
const router = express.Router()
const authenticateMiddleware = require('../middlewares/authenticate')
const testController = require('../controllers/testController')
router.post('/test', authenticateMiddleware.authenticate, testController.login)

module.exports = router;