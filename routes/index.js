var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('./general/index');
});

/* GET home page. */
router.get('/login', function(req, res, next) {
  res.render('./general/login');
});


module.exports = router;
