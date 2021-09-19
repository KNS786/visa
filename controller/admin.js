const Product = require("../model/product");
const getProducts=Product.FetchAll();

exports.getProduct=(req, res, next) => {
    res.render('admin/add-product',{
        path:'admin/add-product'
    })
}

exports.postProduct=(req, res, next) => {
    const title=req.body.title;
    const imgeUrl=req.body.imgUrl;
    const price=req.body.price;
    const description=req.body.description;

    const Products=new Product(title,imgeUrl,price,description);
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