const { DataTypes } = require('sequelize')
const db = require('../config/db')

const User = db.define('users', {
    user_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    email: {
        type: DataTypes.STRING,
        unique: true
    },
    password: {
        type: DataTypes.STRING
    },
    phone: {
        type: DataTypes.STRING,
        unique: true
    }
})

module.exports = User