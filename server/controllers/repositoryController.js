const db = require('../models/index');
const sequelize = require('sequelize');

class RepositoryController {
    

    async createNewRepository(req, res) {
        try{
            const repository = req.body;
            await db.repository.create({
                repository_name: repository.repository_name,
                address: repository.address
            })
            return res.status(200).json({
                errCode: 0,
                msg: 'Create repository successfully!'
            })
        } catch(err) {
            console.log(err)
            return res.status(500).json("error")
        }
    }
}

module.exports = new RepositoryController;