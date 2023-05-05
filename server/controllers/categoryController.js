const db = require('../models/index');
const sequelize = require('sequelize');

class CategoryController {

    async createNewCategory(req, res) {
        try {
            const category = req.body;
            await db.category.create({
                category_name: category.category_name,
                description: category.description
            })
            return res.status(200).json({
                errCode: 0,
                msg: 'Create category successfully!'
            })
        } catch (err) {
            console.log(err)
            return res.status(500).json("error")
        }
    }

    async getAllCategory(req, res) {
        try{
            const result = await db.category.sequelize.query('SELECT * FROM categories', { type: sequelize.QueryTypes.SELECT });
            return res.status(200).json({
                errCode: 0,
                msg: 'Get all category successfully!',
                result
            })
        } catch(err) {
            console.log(err)
            return res.status(500).json("error")
        }
    }
}

module.exports = new CategoryController;