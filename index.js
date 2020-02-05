// My Simple Express API 

// import express, middleware, modules 
var express = require('express'); 
var bodyParser = require('body-parser'); 
var operations = require('./operations.js');

// define our app with express
var app = express(); 

// use body-parser middleware to parse incoming requests
app.use(bodyParser.urlencoded({extended:true})); 
app.use(bodyParser.json()); 

// set port 
var port = process.env.PORT || 8337; 

// get express router 
const router = express.Router(); 

// middleware to use for all requests 
router.use(function(req, res, next) {
  console.log(req.url);
  next();
});

// test route for root 
router.get('/', function(req, res) {
  res.json({ message: 'Hello World!'}); 
});

// route listing 
router.get('/numbers/increase/:number', operations.increase); 
router.get('/numbers/decrease/:number', operations.decrease); 
router.get('/letters/uppercase/:letter', operations.uppercase); 
router.get('/letters/lowercase/:letter', operations.lowercase); 

// register routes 
app.use('/', router);
// start the server by listening to the port 
app.listen(port);
console.log('Listening on port ' + port);
