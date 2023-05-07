// const mysql = require('mysql')
// const dbConfig = require('../config/db.config')

// const connection = mysql.createConnection({
//     host: dbConfig.HOST,
//     user: dbConfig.USER,
//     password: dbConfig.PASSWORD,
//     database: dbConfig.DB
// })

// connection.connect(error => {
//     if(error) throw error;
//     console.log("Successfully connected to the database")
// })

// module.exports = connection
const { Sequelize } = require('sequelize')

const db = new Sequelize('library_management_db_1', 'root', "anhquan1", {
  host: 'localhost',
  dialect: 'mysql',
  logging: false
})

try {
  db.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}

module.exports = db