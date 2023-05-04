const db = require('../models/index');
const sequelize = require('sequelize');


class AuthorController {

    async createNewAuthor(req, res) {
        try {
            const author = req.body;
            await db.author.create({
                author_name: author.author_name,
                nationality: author.description,
                date_of_birth: author.date_of_birth,
                date_of_death: author.date_of_death
            })
            return res.status(200).json({
                errCode: 0,
                msg: 'Create author successfully!'
            })
        } catch (err) {
            console.log(err)
            return res.status(500).json("error")
        }
    }

    async getAllAuthor(req, res) {
        try{
            const result = await db.author.sequelize.query('SELECT * FROM authors', { type: sequelize.QueryTypes.SELECT });
            return res.status(200).json({
                errCode: 0,
                msg: 'Get all author successfully!',
                result
            })
        } catch(err) {
            console.log(err)
            return res.status(500).json("error")
        }
    }
}

module.exports = new AuthorController;