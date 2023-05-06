const db = require('../models/index');
const sequelize = require('sequelize');
const { QueryTypes } = require('sequelize');
class BorrowingOffController {
    //API thuê sách Offline
    async createNewBorrowingOff(req, res) {
        try {
            var now = new Date()
            const { bookline_id } = req.body
            const { user } = req;

            const book = await db.book.findOne({
                where: {
                    bookline_id: bookline_id,
                    idle: 1
                },
                limit: 1
            })
            await db.borrowingOffline.create({
                book_id: book.book_id,
                user_id: user.userId,
                borrowing_date: now,
                due_date: new Date(now.getTime() + (100 * 24 * 60 * 60 * 1000))
            })
            if (book) {
                book.idle = 0;
                book.save()
            } else {
                res.status(401).send("Không tìm thấy sách này")
            }
            return res.status(200).json({
                errCode: 0,
                msg: 'Create borrowingOffline successfully!'
            })
        } catch (err) {
            console.log(err)
            return res.status(500).json("Hết sách")
        }
    }
    //API trả sách offline
    async returnBookOffline(req, res) {
        try {
            // Check if rental id and user id are provided
            const { rental_id } = req.body;
            const { user } = req;
            if (!rental_id) {
                return res.status(400).json({ message: 'Rental ID and user ID are required' });
            }
            // Find the rental record and update return date
            const rental = await db.borrowingOffline.findOne({
                where: { borrowing_id: rental_id, user_id: user.userId, return_date: null }
            });
            if (!rental) {
                return res.status(404).json({ message: 'Rental record not found or book already returned' });
            }
            rental.return_date = new Date();
            await rental.save();
            return res.status(200).json({ message: 'Book returned successfully' });
        } catch (error) {
            console.log(error);
            return res.status(500).json({ message: 'Internal server error' });
        }
    }
    //API danh sách sách đã thuê offline
    async getAllBookBorrowed(req, res) {
        try {
            const { user } = req;
            const book = await db.borrowingOnline.sequelize.query(`SELECT borrowing_id,borrowing_date, return_date, due_date,b.book_id,bl.bookline_id,bookline_name,thumnail,repository_name, address FROM borrowing_offlines
            inner join books b on b.book_id = borrowing_offlines.book_id
            inner join book_lines bl on bl.bookline_id = b.bookline_id
            inner join repositories r on r.repository_id = b.repository_id
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
    //API đếm số sách còn lại theo bookline
    async countBookOfflineRemain(req, res) {
        try {
            const { id } = req.params;
            const book = await db.book.sequelize.query(`SELECT count(*) as so_luong FROM library_management_db.books
            where bookline_id = ${id} and idle = 1`, { type: QueryTypes.SELECT })
            if (!book) {
                return res.status(404).json({ message: 'Hết sách' });
            }
            res.status(200).json(book);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Server error' });
        }
    }
}

module.exports = new BorrowingOffController;