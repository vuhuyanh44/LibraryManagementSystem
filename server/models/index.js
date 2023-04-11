let db = require('../config/db')
const author = require('./author.model')
const authorBook = require('./authorBook.model')
const book = require('./book.model')
const borrowing = require('./borrowing.model')
const location = require('./location.model')
const publisher = require('./publisher.model')
const repository = require('./repository.model')
const repositoryBook = require('./repositoryBook.model')
const role = require('./role.model')
const type = require('./type.model')
const user = require('./user.model')
const category = require('./category.model')

//user - role
role.hasMany(user, {
  foreignKey: "role_id"
})
user.belongsTo(role, {
  foreignKey: "role_id"
})

//user - borrowing
user.hasMany(borrowing, {
  foreignKey: "user_id"
})
borrowing.belongsTo(user, {
  foreignKey: "user_id"
})

//type - borrowing
type.hasMany(borrowing, {
  foreignKey: "type_id"
})
borrowing.belongsTo(type, {
  foreignKey: "type_id"
})

//borrowing - book
book.hasMany(borrowing, {
  foreignKey: "book_id"
})
borrowing.belongsTo(book, {
  foreignKey: "book_id"
})

//publisher - book
publisher.hasMany(book, {
  foreignKey: "publisher_id"
})
book.belongsTo(publisher, {
  foreignKey: "publisher_id"
})

//book - authorBook
book.hasMany(authorBook, {
  foreignKey: "book_id"
})
authorBook.belongsTo(book, {
  foreignKey: "book_id"
})

//author - authorBook
author.hasMany(authorBook, {
  foreignKey: "author_id"
})
authorBook.belongsTo(author, {
  foreignKey: "author_id"
})

//category - book
category.hasMany(book, {
  foreignKey: "category_id"
})
book.belongsTo(category, {
  foreignKey: "category_id"
})

//repositoryBook - book
book.hasMany(repositoryBook, {
  foreignKey: "book_id"
})
repositoryBook.belongsTo(book, {
  foreignKey: "book_id"
})

//repositoryBook - repository
repository.hasMany(repositoryBook, {
  foreignKey: "repository_id" 
})
repositoryBook.belongsTo(repository, {
  foreignKey: "repository_id"
})

//repositoryBook - location
location.hasMany(repositoryBook, {
  foreignKey: "location_id"
})
repositoryBook.belongsTo(location, {
  foreignKey: "location_id"
})


// db.sync({alert:true})
db.sync({ force: true }) // nếu force: true thì sẽ xóa hết dữ liệu cũ của các bảng liên quan
  .then(() => {
    console.log('All models were synchronized successfully.');
  })
  .catch((err) => {
    console.error('Unable to sync models:', err);
  });
module.exports = {
    author: author,
    authorBook: authorBook,
    book: book,
    borrowing: borrowing,
    location: location,
    publisher: publisher,
    repository: repository,
    repositoryBook: repositoryBook,
    role: role,
    type: type,
    user: user,
    category: category
}