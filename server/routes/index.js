const testRouter = require('./test.route')
const db  = require('../models/index')

function route(app) {
    app.use('/api-test',testRouter)
}

module.exports = route