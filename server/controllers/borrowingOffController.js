const db = require('../models/index');
const sequelize = require('sequelize');

class BorrowingOffController {
    

    async createNewBorrowingOff(req, res) {
        try{
            var now = new Date()
            const borrowingOff = req.body;
            await db.borrowingOffline.create({
                book_id: borrowingOff.book_id,
                user_id: borrowingOff.user_id,
                borrowing_date: now,
                return_date: borrowingOff.return_date,
                due_date: new Date(now.getTime() + (100 * 24 * 60 * 60 * 1000))
            })
            return res.status(200).json({
                errCode: 0,
                msg: 'Create borrowingOffline successfully!'
            })
        } catch(err) {
            console.log(err)
            return res.status(500).json("error")
        }
    }
}

module.exports = new BorrowingOffController;