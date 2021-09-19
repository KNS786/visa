const Product = require("../model/product");
const getProducts=Product.FetchAll();

exports.getProducts =(req, res, next) => {
    res.render('shop/product-list',{products:getProducts});  
}

exports.getProductIndex=(req,res,next)=>{
    res.render('shop/index',{products:getProducts});  
}

exports.getCart=(req,res,next)=>{
    res.render('shop/cart',{
        products:getProducts,
        path:'/cart',
        pageTitle:'Your cart page '
    });  
}

exports.CheckOut=(req,res,next)=>{
    res.render('shop/checkout',{
        products:getProducts,
        pageTitle:'Checkout'
    })

}