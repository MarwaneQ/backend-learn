const path = require('path');

const express = require('express');

const shopController = require('../controllers/shop');

const router = express.Router();

router.get('/', shopController.getIndex); // Handle GET requests to /

router.get('/cart', shopController.getCart); // Handle GET requests to /cart

router.get('/checkout', shopController.getCheckout); // Handle GET requests to /checkout

router.get('products', shopController.getProducts); // Handle GET requests to /admin/products

module.exports = router;
