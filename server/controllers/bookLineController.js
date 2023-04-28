const db = require('../models/index');
const sequelize = require('sequelize');

class BookLineController {
    

    async createNewBookLine(req, res) {
        try{
            const bookLine = req.body;
            await db.bookLine.create({
                bookline_name: bookLine.bookline_name,
                publisher_id: bookLine.publisher_id,
                category_id: bookLine.category_id,
                thumnail: bookLine.thumnail
            })
            return res.status(200).json({
                errCode: 0,
                msg: 'Create book line successfully!'
            })
        } catch(err) {
            console.log(err)
            return res.status(500).json("error")
        }
    }
}

module.exports = new BookLineController;