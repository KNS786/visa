const Product = require("../model/product");
const getProducts=Product.FetchAll();

exports.getProducts =(req, res, next) => {
    res.render('shop/product-list',{
        products:getProducts,
        pageTitle:'All Products',
        path:'/products'
    });  
}

exports.getProductIndex=(req,res,next)=>{
    res.render('shop/index',{
        products:getProducts,
        pageTitle:'Shop',
        path:'/'
    });  
}

exports.getCart=(req,res,next)=>{
    res.render('shop/cart',{
        products:getProducts,
        path:'/cart',
        pageTitle:'Your cart page '
    });  
}

exports.getOrders=(req,res,next)=>{
    res.render('shop/orders',{
        products:getProducts,
        path:'/orders',
        pageTitle:'Your Orders  '
    });  
}

exports.CheckOut=(req,res,next)=>{
    res.render('shop/checkout',{
        products:getProducts,
        pageTitle:'Checkout',
        path:'/checkout'
    })

}