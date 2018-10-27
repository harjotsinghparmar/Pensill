var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('./general/index');
});

/* GET home page. */
router.get('/login', function(req, res, next) {
  res.redirect('/admin/login');
});

router.get('/tos', function(req,res,next){
  res.render('./general/tos')
})


module.exports = router;
