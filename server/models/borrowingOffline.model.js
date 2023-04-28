const { DataTypes } = require('sequelize')
const db = require('../config/db')

const BorrowingOffline = db.define('borrowing_offlines', {
    borrowing_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    borrowing_date: {
        type: DataTypes.DATE,
        allowNull: false
    },
    return_date: {
        type: DataTypes.DATE
    },
    due_date: {
        type: DataTypes.DATE
    }
})

module.exports = BorrowingOffline