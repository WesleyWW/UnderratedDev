const express = require('express')
const app = express()
const mongoose = require('mongoose')
require('dotenv').config()
const cors = require('cors')

//MIDDLEWARE
app.use(cors())
app.use(express.json())
//ROUTES
const routes = require('./api/routes')
app.use('/', routes)

//Connect to DB
mongoose.connect(process.env.DB_CONNECT,{ 
        useNewUrlParser: true,
        useUnifiedTopology: true
    },
    () => {
    console.log('connected to db')
})

//Listen to server on port 3000
app.listen(3000)
