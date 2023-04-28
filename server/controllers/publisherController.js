const db = require('../models/index');
const sequelize = require('sequelize');

class PublisherController {
    

    async createNewPublisher(req, res) {
        try{
            const publisher = req.body;
            await db.publisher.create({
                publisher_name: publisher.publisher_name,
                address: publisher.address,
                phone: publisher.phone,
                email: publisher.email
            })
            return res.status(200).json({
                errCode: 0,
                msg: 'Create publisher successfully!'
            })
        } catch(err) {
            console.log(err)
            return res.status(500).json("error")
        }
    }
}

module.exports = new PublisherController;