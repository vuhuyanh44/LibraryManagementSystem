const { DataTypes } = require('sequelize')
const db = require('../config/db')

const Repository = db.define('repositories', {
    repository_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    repository_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    address: {
        type: DataTypes.STRING
    }
})

module.exports = Repository