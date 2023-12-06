// middleware.js

// A simple middleware function that logs the request details
function logRequest(req, res, next) {
    console.log(`Received a ${req.method} request to ${req.url}`);
    next(); // Call the next middleware function in the chain
 }
 
 function blockSpecialBrand(req, res, next) {
    if (req.params.brand === 'Brand C') {
        res.status(403).send('Unavailable Brand');
    } else {
        next();
    }
 }
 
 module.exports = { logRequest, blockSpecialBrand };