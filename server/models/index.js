let db = require('../config/db')
const author = require('./author.model')(db)
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
    user: user
}