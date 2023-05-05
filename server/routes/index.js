const express = require("express")
const testRouter = require('./test.route')
const authRouter = require('./auth.route')
const authorRouter = require('./author.route')
const authorBookRouter = require('./authorBook.route')
const bookRouter = require('./book.route')
const bookLineRouter = require('./bookLine.route')
const borrowingOfflineRouter = require('./borrowingOffline.route')
const borrowingOnlineRouter = require('./borrowingOnline.route')
const categoryRouter = require('./category.route')
const publisherRouter = require('./publisher.route')
const repositoryRouter = require('./repository.route')
const roleRouter = require('./role.route')
const userRouter = require('./user.route')
const upload = require('./upload.route')
const db = require('../models/index')

function route(app) {
    app.use('/api', testRouter)
    app.use('/api', authRouter)
    app.use('/api', authorRouter)
    app.use('/api', authorBookRouter)
    app.use('/api', bookLineRouter)
    app.use('/api', borrowingOfflineRouter)
    app.use('/api', bookRouter)
    app.use('/api', borrowingOnlineRouter)
    app.use('/api', categoryRouter)
    app.use('/api', publisherRouter)
    app.use('/api', roleRouter)
    app.use('/api', repositoryRouter)
    app.use('/api', userRouter)
    app.use('/api', upload)
}


module.exports = {
    route
}

