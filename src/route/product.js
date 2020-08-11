const express = require('express')
const { validateProd } = require('../Middlewares/validator')
const { addProd } = require('../controller/product')

const router = express.Router()

router.post('/add', validateProd, addProd )

module.exports = router