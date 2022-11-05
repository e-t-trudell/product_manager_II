const Product = require('../models/product.model');
module.exports.index = (request, response) => {  //We are exporting a key:val pair of index : function
    response.json({message: "Create some products"});
}
module.exports.createProduct = (request, response) => {
    Product.create(request.body) 
    .then(product => response.json(product))
    .catch(err => response.json(err));
}
module.exports.getProduct = (request, response) => {
    Product.findOne({_id:request.params.id})
        .then(product => response.json(product))
        .catch(err => response.json(err));
}
module.exports.getAllProducts = (request, response) => {
    Product.find({})
        .then(products => {
            console.log(products); //console logs are optional, but they are highly recommended for troubleshooting!
            response.json(products);
        })
        .catch(err => {
            console.log(err)
            response.json(err)
        })
}