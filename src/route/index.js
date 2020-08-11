const express = require('express');
const router = express.Router()
const prodRoute = require('./product')


router.use('/product', prodRoute)

module.exports = router