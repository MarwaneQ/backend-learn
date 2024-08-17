const path = require('path'); // Import path

const express = require('express'); // Import express

const productsController = require('../controllers/products'); // Import the products controller

const router = express.Router(); // Create a router object
 // Create an empty array for products

// /admin/add-product => GET
router.get('/add-product', productsController.getAddProduct); // Handle GET requests to /admin/add-product

// /admin/add-product => POST
router.post('/add-product', productsController.postAddProduct);
module.exports = router; // Export the router
