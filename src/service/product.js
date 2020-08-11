const prodModel = require('../model/product');

class ProductService{
    async addProduct(data){
        const existingProd = await prodModel.findOne({name: data.name})
        if(existingProd) return {success: false, message: "The product already exist", data:null}
        const newProd = new prodModel(data)
        const savedProd = await newProd.save()
        return {success: true, message: "Product added successfully", data: savedProd}
    }
}


module.exports = new ProductService()