const { DataTypes } = require('sequelize')
const db = require('../config/db')

const Book = db.define('books', {
    book_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    idle: {
        type: DataTypes.BOOLEAN
    }
})

module.exports = Book