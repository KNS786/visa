const path = require('path');

const express = require('express');

const router = express.Router();

const AdminController=require('../controller/admin');

//prefix - admin/

router.get('/add-product', AdminController.getProduct);

router.post('/add-product',AdminController.postProduct );

router.get('/products',AdminController.getAdminProducts);

module.exports=router;