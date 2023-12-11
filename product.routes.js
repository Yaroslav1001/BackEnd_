const express = require('express');
const products = require('./products');
const { blockSpecialBrand } = require('./middleware');

const router = express.Router();

// handle get request for path /products
router.get('/products', (request, response) => {
   return response.json(products);
});

// handle get request for path /products/:brand
router.get('/products/:brand', blockSpecialBrand, (request, response) => {
   const { brand } = request.params; // Access the brand parameter from the URL

   // Filter products based on the brand parameter
   const filteredProducts = products.filter(product => product.brand === brand);

   response.json(filteredProducts); // Send the filtered products as a JSON response
});

// Hsndle get requedst for path /products/id/:id

router.get('/products/id/:id', (request, response) => {
   // Converting a string to a number
   const id = parseInt(request.params.id, 10);

   // Processing of input data
   if (isNaN(id)) {
      return response.status(400).json({ error: 'Invalid ID' });
   }
   // Filter products based on the id parameter
   const product = products.find(p => p.id === id);

   // Processing of product availability 
   if (!product) {
      return response.status(404).json({ error: 'Product not found' });
   }

   response.json(product);// Send the filtered products as a JSON response
});

router.get('/productswitherror', (request, response) => {
   let err = new Error("processing error ")
   err.statusCode = 400
   throw err
});


module.exports = router;