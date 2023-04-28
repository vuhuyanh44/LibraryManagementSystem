const db = require('../models/index');
const sequelize = require('sequelize');

class AuthController {
    

    async register(req, res) {
        try{
            const user = req.body;
            await db.user.create({
                username: user.username,
                email: user.email,
                password: user.password,
                phone: user.phone,
                role_id: user.role_id
            })
            return res.status(200).json({
                errCode: 0,
                msg: 'Create user successfully!'
            })
        } catch(err) {
            console.log(err)
            return res.status(500).json("error")
        }
    }
}

module.exports = new AuthController;