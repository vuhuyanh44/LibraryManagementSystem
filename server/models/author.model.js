module.exports = (db) => {
const { DataTypes } = require('sequelize')

const Author = db.define('authors', {
    author_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    author_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    nationality: {
        type: DataTypes.STRING
    },
    date_of_death: {
        type: DataTypes.DATE
    },
    date_of_birth: {
        type: DataTypes.DATE
    },
})
return Author
}