const { DataTypes } = require('sequelize')
const db = require('../config/db')

const Borrowing = db.define('borrowings', {
    borrowing_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    borrow_date: {
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

module.exports = Borrowing