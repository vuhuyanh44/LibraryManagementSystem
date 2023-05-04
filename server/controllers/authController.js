const db = require('../models/index');
const sequelize = require('sequelize');
const bcrypt = require("bcryptjs")
class AuthController {

    async register(req, res) {
        const { username, email, password, role_id, phone } = req.body;
        try {
            //tạo ra một chuỗi ngẫu nhiên
            const salt = bcrypt.genSaltSync(10);
            //mã hóa salt + password 
            const hashPassword = bcrypt.hashSync(password, salt)
            //tạo newUser trong database 
            const checkExistUser = await db.user.findOne({
                where: {
                    email,
                }
            })
            if (checkExistUser) {
                res.status(500).send("email đã tồn tại")
            } else {
                const newUser = await db.user.create({ username: username, email: email, password: hashPassword, role_id: role_id, phone: phone });
                res.status(201).send(newUser);
            }
        } catch (error) {
            res.status(500).send(error);
        }
    }
}

module.exports = new AuthController;