const express = require('express');
const app = express();
// Hardcoded in-memory products array (in a real app, data would typically come from a database)
const products = [
  { id: 1, name: 'Product 1', brand: 'Brand A' },
  { id: 2, name: 'Product 2', brand: 'Brand B' },
  { id: 3, name: 'Product 3', brand: 'Brand A' }
];
// handle get request
app.get('/', (request, response) => {
  // send back a response in plain text
  response.send('response for GET request');
});

// Route with a route parameter to get products by brand
app.get('/products/:brand', (req, res) => {
  const { brand } = req.params; // Access the brand parameter from the URL

  // Filter products based on the brand parameter
  const filteredProducts = products.filter(product => product.brand === brand);

  res.json(filteredProducts); // Send the filtered products as a JSON response
});

// start the server
app.listen(3000,
  () => console.log(`server start at http://localhost:3000/`));
