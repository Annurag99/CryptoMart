var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Welcome to Web3 BootStrap App', name:null });
});

router.post('/', function(req, res, next) {

  res.render('index', { title: 'Welcome to Web3 BootStrap App', name:req.body.name });
});

router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Welcome to Web3 BootStrap App', name:null });
});

router.get('/products', function(req, res, next) {
  res.render('products', { title: 'Welcome to Web3 BootStrap App', name:null });
});

module.exports = router;
