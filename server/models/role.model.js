const { DataTypes } = require('sequelize')
const db = require('../config/db')

const Role = db.define('roles', {
    role_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    role_name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    }
})

module.exports = Role