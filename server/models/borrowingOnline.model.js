const { DataTypes } = require('sequelize')
const db = require('../config/db')

const BorrowingOnline = db.define('borrowing_onlines', {
    borrowing_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    borrowing_date: {
        type: DataTypes.DATE,
        allowNull: false
    }
})

module.exports = BorrowingOnline