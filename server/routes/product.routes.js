const ProductController = require('../controllers/product.controller');  
module.exports = (app) => {
    app.get('/api/', ProductController.index);
    app.get('/api/products', ProductController.getAllProducts);
    app.get('/api/product/:id', ProductController.getProduct);
    app.post('/api/product', ProductController.createProduct);
}