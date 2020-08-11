require("express-async-errors");
require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const routes = require('./src/route')
const app = express()
const port = process.env.PORT || 2025

app.use(cors())

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/api',routes )
app.use((err, req, res, next) => {
    res.status(500).json({success: false, message: "Sever Error", data:null})
})


mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true,  useUnifiedTopology: true })
.then(() => {
    console.log(`::: Connected to mongo`)
}).catch(err => {
    console.log(err)
})
app.listen(port, () => {
    console.log(`::: Server running on port ${port}`)
})
