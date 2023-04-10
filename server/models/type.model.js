const { DataTypes } = require('sequelize')
const db = require('../config/db')

const Type = db.define('types', {
    type_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    type_name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    }
})

module.exports = Type