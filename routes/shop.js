const path = require('path');
const express = require('express')
const rootdir = require('../util/path');
const router = express.Router()
const admindata = require('./admin');
router.get('/',(req,res,next)=>{
  console.log('shop.js',admindata.products);
  res.render('shop',{prods:admindata.products,docTitle:'Shop'});
});

module.exports = router;