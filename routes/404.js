const path=require('path');

const express=require('express');
const router =express.Router();

router.get('/404',function(req,res){
    res.sendFile(__dirname,"../",'views','404.html');
});

module.exports=router;