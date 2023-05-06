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
            console.log(user);
            await db.borrowingOnline.create({
                bookline_id: borrowingOnl.bookline_id,
                user_id: user.userId,
                borrowing_date: new Date(),
            })
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
            const book = await db.borrowingOnline.sequelize.query(`SELECT borrowing_id, borrowing_date, bookline_name, thumnail, bl.bookline_id 
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

    // Số lượng người mượn tài liệu online theo thời gian.
    async getBorrowOnlCountByDateRange(req, res) {
        try {
        const { start_date, end_date } = req.query;
        const result = await db.borrowingOnline.sequelize.query(
            `CALL get_num_user_borrowers_onl('${start_date}', '${end_date}')`
        );
        //console.log(result)
        return res.status(200).json({
            errCode: 0,
            msg: "Get borrow count successfully!",
            result,
        });
        } catch (err) {
        console.log(err);
        return res.status(500).json({ errCode: 2, msg: "Internal server error" });
        }
    }
}

module.exports = new BorrowingOnlController;