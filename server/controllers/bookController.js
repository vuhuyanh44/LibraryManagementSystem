const db = require('../models/index');
const sequelize = require('sequelize');

class BookController {
    

    async createNewBook(req, res) {
        try{
            const book = req.body;
            await db.book.create({
                bookline_id: book.bookline_id,
                repository_id: book.repository_id
            })
            return res.status(200).json({
                errCode: 0,
                msg: 'Create book successfully!'
            })
        } catch(err) {
            console.log(err)
            return res.status(500).json("error")
        }
    }
}

module.exports = new BookController;