let db = require('../config/db')
const author = require('./author.model')
const authorBook = require('./authorBook.model')
const book = require('./book.model')
const bookLines = require('./bookLine.model')
const borrowingOffline = require('./borrowingOffline.model')
const borrowingOnline = require('./borrowingOnline.model')
const publisher = require('./publisher.model')
const repository = require('./repository.model')
const role = require('./role.model')
const user = require('./user.model')
const category = require('./category.model')

//user - role
role.hasMany(user, {
  foreignKey: "role_id"
})
user.belongsTo(role, {
  foreignKey: "role_id"
})

//user - borrowingOffline
user.hasMany(borrowingOffline, {
  foreignKey: "user_id"
})
borrowingOffline.belongsTo(user, {
  foreignKey: "user_id"
})

//user - borrowingOnline
user.hasMany(borrowingOnline, {
  foreignKey: "user_id"
})
borrowingOnline.belongsTo(user, {
  foreignKey: "user_id"
})


//borrowingOffline - book
book.hasMany(borrowingOffline, {
  foreignKey: "book_id"
})
borrowingOffline.belongsTo(book, {
  foreignKey: "book_id"
})

//borrowingOnline - bookLines
bookLines.hasMany(borrowingOnline, {
  foreignKey: "book_id"
})
borrowingOnline.belongsTo(bookLines, {
  foreignKey: "book_id"
})

//publisher - bookLines
publisher.hasMany(bookLines, {
  foreignKey: "publisher_id"
})
bookLines.belongsTo(publisher, {
  foreignKey: "publisher_id"
})

//bookLines - authorBook
bookLines.hasMany(authorBook, {
  foreignKey: "bookline_id"
})
authorBook.belongsTo(bookLines, {
  foreignKey: "bookline_id"
})

//author - authorBook
author.hasMany(authorBook, {
  foreignKey: "author_id"
})
authorBook.belongsTo(author, {
  foreignKey: "author_id"
})

//category - bookLines
category.hasMany(bookLines, {
  foreignKey: "category_id"
})
bookLines.belongsTo(category, {
  foreignKey: "category_id"
})

//repository - book
repository.hasMany(book, {
  foreignKey: "repository_id"
})
book.belongsTo(repository, {
  foreignKey: "repository_id"
})

// book - bookLines
bookLines.hasMany(book, {
  foreignKey: "bookline_id"
})
book.belongsTo(bookLines, {
  foreignKey: "bookline_id"
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
    bookLines: bookLines,
    borrowingOnline: borrowingOnline,
    borrowingOffline:borrowingOffline,
    publisher: publisher,
    repository: repository,
    role: role,
    user: user,
    category: category
}