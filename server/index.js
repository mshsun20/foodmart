const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')
const bodyParser = require('body-parser')
const multer = require('multer')
require('./dbsetup/dbconfig')
const routes = require('./routes/route')

const app = express()
dotenv.config({path:'config.env'})


// middleware
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(express.json())
app.use(cors())
app.use(express.static('uploads'))
app.use('/', routes)

// env variables
const port = process.env.PORT || 5050
const host = process.env.HOST || 'localhost'


// image storage setup
const imgconfig = multer.diskStorage({
    destination: (req,file,callback) => {
        callback(null, 'uploads')
    },
    filename: (req,file,callback) => {
        callback(null, `image-${Date.now()}.${file.originalname}`)
    }
})
const isImage = (req,file,callback) => {
    if (file.mimetype.startsWith('image')) {
        callback(null, true)
    }
    else {
        callback(null, Error(`Only image File is Allowed.`))
    }
}
const upload = multer({
    storage: imgconfig,
    fileFilter: isImage
})

// ping
app.listen(port,host, (req, res) => {
    console.log(`Server is Running at http://${host}:${port}`)
})

