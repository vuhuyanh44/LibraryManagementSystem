const express = require('express')
const cors = require('cors')
const app = express()
const dotenv = require('dotenv')
const bodyParser = require('body-parser')
const { route } = require('./routes/index')


app.use(bodyParser.json())
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
dotenv.config()

//config app

route(app)
const PORT = process.env.PORT || 6969;

app.listen(PORT, () => {
    console.log("Backend Nodejs is running on the port: " + PORT)
})