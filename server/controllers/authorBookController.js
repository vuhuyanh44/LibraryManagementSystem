const db = require('../models/index');
const sequelize = require('sequelize');

class AuthorBookController {
    

    async createNewAuthorBook(req, res) {
        try{
            const authorBook = req.body;
            await db.authorBook.create({
                author_id: authorBook.author_id,
                bookline_id: authorBook.bookline_id
            })
            return res.status(200).json({
                errCode: 0,
                msg: 'Create authorBook successfully!'
            })
        } catch(err) {
            console.log(err)
            return res.status(500).json("error")
        }
    }
}

module.exports = new AuthorBookController;