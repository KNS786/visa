const Product = require("../model/product");

exports.getProduct=(req, res, next) => {
    res.render('addproduct')
}

exports.postProduct=(req, res, next) => {
    const Products=new Product(req.body.title);
    Products.save();
    res.redirect('/');
}

exports.getShop=(req, res, next) => {
    const getProducts=Product.FetchAll();
    res.render('shop',{products:getProducts});  
}