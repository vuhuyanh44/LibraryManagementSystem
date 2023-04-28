const db = require('../models/index');
const sequelize = require('sequelize');

class BorrowingOnlController {
    

    async createNewBorrowingOnl(req, res) {
        try{
            const borrowingOnl = req.body;
            await db.borrowingOnline.create({
                bookline_id: borrowingOnl.bookline_id,
                user_id: borrowingOnl.user_id,
                borrowing_date: new Date(),
            })
            return res.status(200).json({
                errCode: 0,
                msg: 'Create borrowingOnline successfully!'
            })
        } catch(err) {
            console.log(err)
            return res.status(500).json("error")
        }
    }
}

module.exports = new BorrowingOnlController;