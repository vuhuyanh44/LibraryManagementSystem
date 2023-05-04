const db = require('../models/index');
const Book = db.book;
const Bookline = db.bookLine;
const Category = db.category;
const Publisher = db.publisher;
const Author = db.author;
const AuthorBook = db.authorBook;
const Repository = db.repository;
const { QueryTypes } = require('sequelize');
const sequelize = require('sequelize');
const { Op } = require("sequelize");
class BookController {

    async createNewBook(req, res) {
        try {
            const book = req.body;
            await db.book.create({
                bookline_id: book.bookline_id,
                repository_id: book.repository_id
            })
            return res.status(200).json({
                errCode: 0,
                msg: 'Create book successfully!'
            })
        } catch (err) {
            console.log(err)
            return res.status(500).json("error")
        }
    }
    //API Lấy toàn bộ sách để hiển thị
    async getAllBook(req, res) {
        try {
            const books = await Bookline.findAll({
                include: [{ model: Book }],
            });
            res.status(200).json(books);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Internal server error' });
        }
    }
    //API tìm kiếm sách theo tên sử dụng Like
    async searchBook(req, res) {
        const { bookline_name } = req.query;
        try {
            const books = await Bookline.findAll({
                where: {
                    bookline_name: {
                        [Op.like]: `%${bookline_name}%`,
                    },
                },
            });
            res.status(200).send(books);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Internal server error' });
        }
    }
    //Filter tìm kiếm sách bằng category
    async filterBookByCategory(req, res) {
        try {
            const { category } = req.query;
            let books;

            if (category) {
                const categoryId = await Category.findOne({
                    where: { category_name: category },
                    attributes: ["category_id"],
                });

                if (categoryId) {
                    books = await Bookline.findAll({
                        include: [
                            {
                                model: Category,
                                where: { category_id: categoryId.category_id },
                                attributes: [],
                            },
                        ],
                        attributes: ["bookline_id", "bookline_name", "thumnail", "createdAt", "updatedAt", "publisher_id"],
                    });
                }
            } else {
                books = await Bookline.findAll({
                    attributes: ["bookline_id", "bookline_name", "thumbnail", "createdAt", "updatedAt", "publisher_id"],
                });
            }

            res.json(books);
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: "Internal server error" });
        }
    }
    //API chi tiết 1 quyển sách
    async getBookDetail(req, res) {
        try {
            const { id } = req.params;
            const book = await Bookline.sequelize.query(`select book_lines.bookline_id, bookline_name, thumnail, categories.category_name, description, GROUP_CONCAT(DISTINCT author_name ORDER BY author_name ASC SEPARATOR ', ') as authors
          , publisher_name, publishers.address, publishers.phone from book_lines
          inner join categories on categories.category_id = book_lines.category_id
          inner join author_books on author_books.bookline_id = book_lines.bookline_id
          inner join authors on authors.author_id = author_books.author_id
          inner join publishers on publishers.publisher_id = book_lines.publisher_id
          where book_lines.bookline_id = ${id}
          group by bookline_id`, { type: QueryTypes.SELECT })

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

module.exports = new BookController;