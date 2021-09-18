const path = require('path');

const express = require('express');

const router = express.Router();

const controller=require('../controller/product');

router.get('/add-product', controller.getProduct);

router.post('/add-product',controller.postProduct );

module.exports=router;