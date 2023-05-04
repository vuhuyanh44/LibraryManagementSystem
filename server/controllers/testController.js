
class testController {
    async login(req, res) {
        try {
            res.status(200).json("ok")
        } catch (error) {
            console.log(error);
            return res.status(500).json({
                message: 'Internal server error',
            });
        }
    }
}

module.exports = new testController;