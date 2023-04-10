const { DataTypes } = require('sequelize')
const db = require('../config/db')

const Publisher = db.define('publishers', {
    publisher_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    publisher_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    address: {
        type: DataTypes.STRING
    },
    phone: {
        type: DataTypes.STRING,
        unique: true
    },
    email: {
        type: DataTypes.STRING,
        unique: true
    },
})

module.exports = Publisher