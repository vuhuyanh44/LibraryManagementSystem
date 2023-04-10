const { DataTypes } = require('sequelize')
const db = require('../config/db')

const Location = db.define('locations', {
    location_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    location_name: {
        type: DataTypes.STRING,
        allowNull: false,
    }
})

module.exports = Location