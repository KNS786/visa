const path = require('path');

const express = require('express');

const router = express.Router();


const ShopController = require('../controller/shop');

router.get('/', ShopController.getProductIndex);

router.get('/products',ShopController.getProducts);

router.get('/cart',ShopController.getCart);


router.get('/checkout',ShopController.CheckOut);

module.exports=router;