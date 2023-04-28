const db = require('../models/index');
const sequelize = require('sequelize');

class RoleController {
    

    async createNewRole(req, res) {
        try{
            const role = req.body;
            await db.role.create({
                role_name: role.role_name
            })
            return res.status(200).json({
                errCode: 0,
                msg: 'Create role successfully!'
            })
        } catch(err) {
            console.log(err)
            return res.status(500).json("error")
        }
    }
}

module.exports = new RoleController;