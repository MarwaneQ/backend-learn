const path = require('path'); // Import path

const express = require('express'); // Import express

const adminController = require('../controllers/admin'); // Import the products controller

const router = express.Router(); // Create a router object
 // Create an empty array for products

// /admin/add-product => GET
router.get('/add-product', adminController.getAddProduct); // Handle GET requests to /admin/add-product

// /admin/products => GET
router.get('/products', adminController.getProducts); // Handle GET requests to /admin/products
// /admin/add-product => POST
router.post('/add-product', adminController.postAddProduct);
module.exports = router; // Export the router
