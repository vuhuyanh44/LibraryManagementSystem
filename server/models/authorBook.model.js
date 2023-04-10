const { DataTypes } = require('sequelize')
const db = require('../config/db')
const AuthorBook = db.define('author_book', {
    authorbook_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    }
})

module.exports = AuthorBook