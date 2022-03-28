// Importing libraries and declaration of variables
const express = require('express')
const fileUpload = require('express-fileupload')
const morgan = require('morgan')
const path = require("path")
const server = express()

// Server config
server.set('port', process.env.PORT || 8080)

// Middlewares
server.use(express.urlencoded({ extended: false }))
server.use(express.json())
server.use(morgan('dev'))
server.use(fileUpload())
require("./db.js")
    
// Defining app routes
server.use("/api", require("./api/formUpload"))
server.use('/css', express.static('node_modules/bootstrap/dist/css'));
server.use('/css', express.static('node_modules/bootstrap-icons/font'))
server.use('/js', express.static('node_modules/jquery/dist'));
server.use('/js', express.static('node_modules/popper.js/dist'));
server.use('/js', express.static('node_modules/bootstrap/dist/js'));
server.use(express.static(path.join(__dirname, 'public')));


module.exports = server