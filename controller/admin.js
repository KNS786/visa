const Product = require("../model/product");
const getProducts=Product.FetchAll();

exports.getProduct=(req, res, next) => {
    res.render('admin/add-product')
}

exports.postProduct=(req, res, next) => {
    const Products=new Product(req.body.title);
    Products.save();
    res.redirect('/');
}

exports.getAdminProducts=(req,res,next)=>{
    res.render('shop/',{
        products:getProducts,
        pageTitle:'Admin Products',
        path:'/admin/products'
    })

}