const db = require("../models/index");
const Book = db.book;
const Bookline = db.bookLine;
const Category = db.category;
const Publisher = db.publisher;
const Author = db.author;
const AuthorBook = db.authorBook;
const Repository = db.repository;
const { QueryTypes } = require("sequelize");
const sequelize = require("sequelize");
const { Op } = require("sequelize");
class BookController {
  async createNewBook(req, res) {
    try {
      const book = req.body;
      await db.book.create({
        bookline_id: book.bookline_id,
        repository_id: book.repository_id,
        idle: true,
      });
      return res.status(200).json({
        errCode: 0,
        msg: "Create book successfully!",
      });
    } catch (err) {
      console.log(err);
      return res.status(500).json("error");
    }
  }

  async updateBook(req, res) {
    try {
      const book_id = req.params.id;
      const book = req.body;
      const data = await db.book.findOne({
        where: {
          book_id,
        },
      });
      await db.book.update(
        {
          bookline_id: data.bookline_id,
          repository_id: book.repository_id,
          idle: book == null ? data.idle : book.idle,
        },
        {
          where: {
            book_id,
          },
        }
      );
      return res.status(200).json({
        errCode: 0,
        msg: "Update book successfully!",
      });
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  }
  async countBookIdleByBookLineID(req, res) {
    try {
      const bookline_id = req.params.id;
      const result1 = await db.book.sequelize.query(
        `SELECT count(*) as repo1 FROM books where bookline_id = ${bookline_id} and repository_id = 1 `,
        { type: sequelize.QueryTypes.SELECT }
      );
      const result2 = await db.book.sequelize.query(
        `SELECT count(*) as repo2 FROM books where bookline_id = ${bookline_id} and repository_id = 2 `,
        { type: sequelize.QueryTypes.SELECT }
      );
      const result3 = await db.book.sequelize.query(
        `SELECT count(*) as repo3 FROM books where bookline_id = ${bookline_id} and repository_id = 3 `,
        { type: sequelize.QueryTypes.SELECT }
      );
      const result4 = await db.book.sequelize.query(
        `SELECT count(*) as repo4 FROM books where bookline_id = ${bookline_id} and repository_id = 4 `,
        { type: sequelize.QueryTypes.SELECT }
      );
      return res.status(200).json({
        errCode: 0,
        msg: "number of book in repo!",
        result1,
        result2,
        result3,
        result4,
      });
    } catch (err) {
      console.log(err);
      return res.status(500).json("error");
    }
  }

  //API Lấy toàn bộ sách để hiển thị
  async getAllBook(req, res) {
    try {
      const books = await Bookline.sequelize.query(
        `select book_lines.bookline_id, bookline_name, thumnail, categories.category_name, description as category_description, GROUP_CONCAT(DISTINCT author_name ORDER BY author_name ASC SEPARATOR ', ') as authors
            , publisher_name, publishers.address as publisher_address, publishers.phone as publisher_phone, repository_name, repositories.address as repository_address from book_lines
            inner join categories on categories.category_id = book_lines.category_id
            inner join author_books on author_books.bookline_id = book_lines.bookline_id
            inner join authors on authors.author_id = author_books.author_id
            inner join publishers on publishers.publisher_id = book_lines.publisher_id
            inner join books on books.bookline_id = book_lines.bookline_id 
            inner join repositories on repositories.repository_id = books.repository_id
            group by bookline_id`,
        { type: QueryTypes.SELECT }
      );
      res.status(200).json(books);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal server error" });
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
      res.status(500).json({ message: "Internal server error" });
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
            attributes: [
              "bookline_id",
              "bookline_name",
              "thumnail",
              "createdAt",
              "updatedAt",
              "publisher_id",
            ],
          });
        }
      } else {
        books = await Bookline.findAll({
          attributes: [
            "bookline_id",
            "bookline_name",
            "thumbnail",
            "createdAt",
            "updatedAt",
            "publisher_id",
          ],
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
      const book = await Bookline.sequelize.query(
        `select book_lines.bookline_id, bookline_name, thumnail, categories.category_name, description as category_description, GROUP_CONCAT(DISTINCT author_name ORDER BY author_name ASC SEPARATOR ', ') as authors
            , publisher_name, publishers.address as publisher_address, publishers.phone as publisher_phone, repository_name, repositories.address as repository_address, books.book_id from book_lines
            inner join categories on categories.category_id = book_lines.category_id
            inner join author_books on author_books.bookline_id = book_lines.bookline_id
            inner join authors on authors.author_id = author_books.author_id
            inner join publishers on publishers.publisher_id = book_lines.publisher_id
            inner join books on books.bookline_id = book_lines.bookline_id 
            inner join repositories on repositories.repository_id = books.repository_id
            where book_lines.bookline_id = ${id}
            group by bookline_id`,
        { type: QueryTypes.SELECT }
      );

      if (!book) {
        return res.status(404).json({ message: "Book not found" });
      }

      res.status(200).json(book);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Server error" });
    }
  }

  //đếm số lượng sách có trong kho
  async getBookCount(req, res) {
    try {
      const bookCount = await db.book.sequelize.query(
        `SELECT COUNT(*) as number_of_books
          FROM books
          WHERE idle = 1;`,
        { type: QueryTypes.SELECT }
      );
      return res.status(200).json({
        errCode: 0,
        result: bookCount,
        msg: "Get book count successfully!",
      });
    } catch (err) {
      console.log(err);
      return res.status(500).json("error");
    }
  }

  //đếm số lượng sách thêm mới theo thời gian
  async getNumNewBooks(req, res) {
    try {
      const { start_date, end_date } = req.query;
      const result = await db.book.sequelize.query(
        `CALL get_num_new_books('${start_date}', '${end_date}')`
      );
      return res.status(200).json({
        errCode: 0,
        msg: "successfully!",
        result,
      });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ errCode: 2, msg: "Internal server error" });
    }
  }
}

module.exports = new BookController();
