const path = require('path');

const express = require('express');

const router = express.Router();

const adminData=require('./admin');

const controller = require('../controller/product');

router.get('/', controller.getShop);

module.exports=router;