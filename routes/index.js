var express = require('express');
var fs = require('fs');
var router = express.Router();

/* GET Home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

router.post('/', function(req, res, next) {
  res.render('index', { title: 'About' });
});


router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

router.post('/home', function(req, res, next) {
  res.render('index', { title: 'About' });
});


/* GET About page. */
router.get('/about', function(req, res, next) {
  res.render('index', { title: 'About' });
});

router.get('/resume', function ( req, res ) {
  let path =  __dirname + '/../public/' +'/Content/Vaishali_Siddeshwar_Resume.pdf';
  
  res.download(path, function (err) {
    if (err) {
        console.log("Error");
        console.log(err);
    } else {
        console.log("Success");
    }}); 
});

/* GET Products page. */
router.get('/projects', function(req, res, next) {
  res.render('index', { title: 'Projects' });
});

/* GET Services page. */
router.get('/services', function(req, res, next) {
  res.render('index', { title: 'Services' });
});

/* GET Contact page. */
router.get('/contact', function(req, res, next) {
  res.render('index', { title: 'Contact' });
});

router.post('/contact', function(req, res, next) {
  
  res.render('index', { title: 'Home' });
});


module.exports = router;
