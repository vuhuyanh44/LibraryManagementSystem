const { DataTypes } = require('sequelize')
const db = require('../config/db')

const BookLine = db.define('book_lines', {
    bookline_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    bookline_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    thumnail: {
        type: DataTypes.STRING
    }
})

module.exports = BookLine