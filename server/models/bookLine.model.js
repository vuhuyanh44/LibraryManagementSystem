const { DataTypes } = require('sequelize')
const db = require('../config/db')

const BookLine = db.define('book_lines', {
    bookline_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    bookline_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    thumnail: {
        type: DataTypes.STRING
    },
    created_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    },
})

module.exports = BookLine