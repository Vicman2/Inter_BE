const mongoose = require('mongoose')
const Schema = mongoose.Schema



const productModel = new Schema({
    name: {
        type: String,
        required: [true, "Name is required"]
    },
    manufacturer: {
        type: String, 
        required: [true, "Maufacturer is required"]
    }, 
    unit_cost_price: {
        type: String, 
        required: [true, "Unit cost is required"]
    },
    unit_selling_price:{
        type: String, 
        required: [true, "selling is required"]
    },
    in_stock: {
        type: Number, 
        required : [true, "in_stock is required"]
    },
    expiry_date:{
        type: String, 
        default: null
    }, 
    barcode: {
        type: String, 
        required: [true, "Barcode is required"]
    }
}, {timestamps: true})


module.exports = mongoose.model('products', productModel);