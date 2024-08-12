const express = require('express');
const path = require('path');
const rootdir = require('../util/path');
const router = express.Router();
const product = [];
router.get('/add-product',(req,res,next)=>{
  res.sendFile(path.join(rootdir,'views','add-product.html'));
});

router.post('/add-product',(req,res,next)=>{
  product.push({title:req.body.title});
  console.log(req.body.title);
  res.redirect('/');
});
exports.routes = router;
exports.products = product;