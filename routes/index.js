var express = require('express');
var fs = require('fs');
var router = express.Router();

/* GET Home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});
router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Home' });
});


/* GET About page. */
router.get('/about', function(req, res, next) {
  res.render('index', { title: 'About' });
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
  res.render('index', { title: 'Contact', sender: ""  });
});

router.post('/contact', function(req, res, next) {
  let content = req.body.inputname + '\t' +req.body.inputemail +  '\t' +
  req.body.inputsubject + '\t' + req.body.inputmessage;
 
  fs.writeFile('inbox.txt', content, function (err) {
    if (err) return console.log(err);
    console.log('Error! > inbox.txt');
  
  });
  res.render('index', { title: 'Contact', sender: req.body.inputname });
});


module.exports = router;
