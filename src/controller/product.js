const ProdService = require('../service/product')

class prodController{
    async addProd(req, res){
        const serviceResponse =await   ProdService.addProduct(req.body);
        const status = serviceResponse.success ? 201: 400;
        res.status(status).json(serviceResponse)
    }
}

module.exports = new  prodController()