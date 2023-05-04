let db = require('../config/db')
const author = require('./author.model')
const authorBook = require('./authorBook.model')
const book = require('./book.model')
const bookLine = require('./bookLine.model')
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

//borrowingOnline - bookLine
bookLine.hasMany(borrowingOnline, {
  foreignKey: "bookline_id"
})
borrowingOnline.belongsTo(bookLine, {
  foreignKey: "bookline_id"
})

//publisher - bookLine
publisher.hasMany(bookLine, {
  foreignKey: "publisher_id"
})
bookLine.belongsTo(publisher, {
  foreignKey: "publisher_id"
})

//bookLine - authorBook
bookLine.hasMany(authorBook, {
  foreignKey: "bookline_id"
})
authorBook.belongsTo(bookLine, {
  foreignKey: "bookline_id"
})

//author - authorBook
author.hasMany(authorBook, {
  foreignKey: "author_id"
})
authorBook.belongsTo(author, {
  foreignKey: "author_id"
})

//category - bookLine
category.hasMany(bookLine, {
  foreignKey: "category_id"
})
bookLine.belongsTo(category, {
  foreignKey: "category_id"
})

//repository - book
repository.hasMany(book, {
  foreignKey: "repository_id"
})
book.belongsTo(repository, {
  foreignKey: "repository_id"
})

// book - bookLine
bookLine.hasMany(book, {
  foreignKey: "bookline_id"
})
book.belongsTo(bookLine, {
  foreignKey: "bookline_id"
})


// db.sync({alert:true})
db.sync({ force: false }) // nếu force: true thì sẽ xóa hết dữ liệu cũ của các bảng liên quan
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
  bookLine: bookLine,
  borrowingOnline: borrowingOnline,
  borrowingOffline: borrowingOffline,
  publisher: publisher,
  repository: repository,
  role: role,
  user: user,
  category: category
}