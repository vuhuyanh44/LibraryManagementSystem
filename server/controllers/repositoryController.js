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

    async getAllRepository(req, res) {
        try{
            const result = await db.repository.sequelize.query('SELECT * FROM repositories', { type: sequelize.QueryTypes.SELECT });
            return res.status(200).json({
                errCode: 0,
                msg: 'Get all repository successfully!',
                result
            })
        } catch(err) {
            console.log(err)
            return res.status(500).json("error")
        }
    }

    async updateRepository(req, res) {
        try{
            const repo_id = req.params.id
            const repository = req.body
            await db.book.update({
                repository_name: repository.repository_name,
                address: repository.address
            }, {
                where: {
                    repo_id
                }
            })
            return res.status(200).json({
                errCode: 0,
                msg: 'Update book successfully!'
            }) 
        } catch (err) {
            console.log(err)
            return res.status(500).json(err)
    
        }
    }
}

module.exports = new RepositoryController;