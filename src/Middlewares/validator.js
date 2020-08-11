const joi = require('joi')

exports.validateProd = (req, res, next)=> {
    const schema = {
        name: joi.string().min(3).required(), 
        manufacturer: joi.string().min(3).required(),
        unit_cost_price: joi.number().required(),
        unit_selling_price: joi.number().required(),
        barcode: joi.string().required(),
        in_stock: joi.number().integer().required(), 
        expiry_date: joi.date().optional()
    }

    const isValid = joi.validate(req.body, schema)
    if(isValid.error) return res.status(400).json({success : false, message: isValid.error.message, data: null})
    next()
}

