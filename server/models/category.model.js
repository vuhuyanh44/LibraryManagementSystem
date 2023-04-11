const { DataTypes } = require('sequelize')
const db = require('../config/db')
const Category = db.define('categories', {
    category_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    category_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING
    },
})

module.exports = Category