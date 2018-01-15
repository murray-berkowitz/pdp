const express = require('express')
const app = express()
const bodyParser = require('body-parser')  // Middleware that provides all requests a body method that contains the request body.
const path = require('path')

app.use('/public', express.static(path.join(__dirname, '/public')))  // express.static path is relative to where node process is launched from, so safer to use absolute path using global __dirname
app.use('/dist', express.static(path.join(__dirname, '/dist')))

app.use(require('morgan')('dev'))  // Used for detailed logging all requests
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.get('/*', (req, res, next) => res.sendFile(path.join(__dirname, '/src/index.html')))

module.exports = app