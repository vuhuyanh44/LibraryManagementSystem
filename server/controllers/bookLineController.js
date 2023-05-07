const db = require('../models/index');
const sequelize = require('sequelize');
const { QueryTypes } = require('sequelize');

function convertToFileName(text) {
    let fileName = text
      .toLowerCase() // Chuyển đổi tất cả các ký tự sang chữ thường
      .trim() // Xóa khoảng trắng đầu và cuối chuỗi
      .normalize("NFD") // Chuyển đổi các ký tự dấu sang các ký tự không dấu
      .replace(/[\u0300-\u036f]/g, "") // Loại bỏ các ký tự dấu
      .replace(/đ/g, "d") // Chuyển chữ "đ" thành "d"
      .replace(/[^a-zA-Z0-9]+/g, "-") // Thay thế các ký tự không phải chữ cái hoặc số bằng dấu "-"
      .replace(/^-+|-+$/g, ""); // Xóa các dấu "-" ở đầu hoặc cuối chuỗi
      return fileName + ".pdf"
  }
class BookLineController {
    

    async createNewBookLine(req, res) {
        try{
            const bookLine = req.body;
            await db.bookLine.create({
                bookline_name: bookLine.bookline_name,
                publisher_id: bookLine.publisher_id,
                category_id: bookLine.category_id,
                thumnail: convertToFileName(bookLine.bookline_name)
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

    async updateBookLine(req, res) {
        try{
        const bookline_id = req.params.id
        const bookLine = req.body
        const data = await db.bookLine.findOne({
            where: {
                bookline_id
            }
        })
        await db.bookLine.update({
            bookline_name: bookLine.bookline_name,
            publisher_id: bookLine.publisher_id,
            category_id: bookLine.category_id,
            thumnail: bookLine.bookline_name == null ? data.thumnail : convertToFileName(bookLine.bookline_name)
        }, {
            where: {
                bookline_id
            }
        })
        return res.status(200).json({
            errCode: 0,
            msg: 'Update book line successfully!'
        }) 
    } catch (err) {
        console.log(err)
        return res.status(500).json(err)

    }
}
    
    async getAllBookLine(req, res) {
        try {
        const booklines = await db.bookLine.sequelize.query(`select book_lines.bookline_id as _id, bookline_name, thumnail, categories.category_name, description as category_description, GROUP_CONCAT(DISTINCT author_name ORDER BY author_name ASC SEPARATOR ', ') as authors
        , publisher_name, publishers.address as publisher_address, publishers.phone as publisher_phone from book_lines
        inner join categories on categories.category_id = book_lines.category_id
        inner join author_books on author_books.bookline_id = book_lines.bookline_id
        inner join authors on authors.author_id = author_books.author_id
        inner join publishers on publishers.publisher_id = book_lines.publisher_id
        group by _id`,
        { type: QueryTypes.SELECT })
        return res.status(200).json({
            booklines
        })
    } catch(err) {
        console.log(err)
        return res.status(500).json(err)
    }
}

    // lấy ra tên các dòng sách và số lượng của chúng
    async getAllBookLineNames(req, res) {
        try {
        const bookLines = await db.bookLine.findAll({
            include: [
            {
                model: db.book,
                attributes: [],
            },
            ],
            attributes: [
            "bookline_name",
            [sequelize.fn("COUNT", sequelize.col("*")), "quantity"],
            ],
            group: ["book_lines.bookline_name"],
        });
        return res.status(200).json({
            errCode: 0,
            data: bookLines,
            msg: "Get book lines successfully!",
        });
        } catch (error) {
        console.error("Error occurred:", error);
        return res.status(500).json("error");
        }
    }

    //Đếm số lượng dòng sách 
    async getBookLineCount(req, res) {
        try {
          const bookLineCount = await db.book.sequelize.query(
            `SELECT COUNT(*) as number_of_booklines
              FROM book_lines
              `,
            { type: QueryTypes.SELECT }
          );
          return res.status(200).json({
            errCode: 0,
            result: bookLineCount,
            msg: "Get book count successfully!",
          });
        } catch (err) {
          console.log(err);
          return res.status(500).json("error");
        }
      }
}
module.exports = new BookLineController;