const db = require('../models/index');
const sequelize = require('sequelize');

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
}
module.exports = new BookLineController;