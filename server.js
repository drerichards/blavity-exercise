'use strict'
require('dotenv').config()
const express = require('express'),
    app = express(),
    cors = require('cors'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    morgan = require('morgan'),
    {
        DATABASE_URL,
        PORT
    } = require('./config')

app.use(cors())
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*")
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    )
    res.header(
      "Access-Control-Allow-Methods",
      "GET, POST, PUT, PATCH, DELETE, OPTIONS"
    )
    next()
  })
  
app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

mongoose.Promise = global.Promise
mongoose.connect(DATABASE_URL, { useNewUrlParser: true })
mongoose.connection.once('open', () => {
    console.log('mongo connected')
}).on('error', error => console.warn('Error: ', error))

require('./routes/crudRoutes')(app)
require('./routes/newsRoute')(app)

app.use('*', (req, res) => {
    return res.status(404).json({
        message: 'Route Not Found'
    })
})

const logErrors = (err, req, res, next) => {
    console.error(err.stack)
    return res.status(500).json({
        error: 'Something went wrong'
    })
}

app.use(logErrors)
app.listen(PORT, () => console.log(`listening on port ${PORT}`))
module.exports = {
    app
}