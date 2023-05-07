const db = require('../models/index');
const sequelize = require('sequelize');
const { QueryTypes } = require('sequelize');
const { Op } = require("sequelize");
class BorrowingOnlController {
    //API Thuê sách Online
    async createNewBorrowingOnl(req, res) {
        try {
            const borrowingOnl = req.body;
            const { user } = req;
            const isRental = await db.borrowingOnline.findOne({
                where: {
                    bookline_id: borrowingOnl.bookline_id,
                    user_id: user.userId,
                }
            })
            if (isRental) {
                return res.status(500).json("Sách đã mượn rồi")
            } else {
                await db.borrowingOnline.create({
                    bookline_id: borrowingOnl.bookline_id,
                    user_id: user.userId,
                    borrowing_date: new Date(),
                })
            }
            return res.status(200).json({
                errCode: 0,
                msg: 'Create borrowingOnline successfully!'
            })
        } catch (err) {
            console.log(err)
            return res.status(500).json("error")
        }
    }
    //API người dùng xem sách mình đã thuê 
    async getBorrowedBookOnline(req, res) {
        try {
            const { user } = req;
            const book = await db.borrowingOnline.sequelize.query(`SELECT borrowing_id, borrowing_date, bookline_name, thumbnail, bl.bookline_id, document_url 
            From borrowing_onlines bo
            inner join book_lines bl on bl.bookline_id = bo.bookline_id
            where user_id = ${user.userId}`, { type: QueryTypes.SELECT })
            if (!book) {
                return res.status(404).json({ message: 'Book not found' });
            }
            res.status(200).json(book);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Server error' });
        }
    }
}

module.exports = new BorrowingOnlController;