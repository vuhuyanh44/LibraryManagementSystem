const { DataTypes } = require('sequelize')
const db = require('../config/db')

const RepositoryBook = db.define('repository_book', {
    repositorybook_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }
})

module.exports = RepositoryBook