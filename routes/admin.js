// Import passport to use strategy 

var passport = require('passport')
var router = require('express').Router();
var AdminController = require('../controllers/AdminController')


/* This router contains all the routes to the professors listing pages and description

*/

var authCheck = (req,res,next)=>{
  if(!req.user){
      res.redirect('/auth/login')
  }
  else{
      console.log(req.user)
      next()
  }
}


router.get('/', authCheck,AdminController.admin)
// add job / study get request
router.get('/jobs/add',AdminController.add_job_get)
router.get('/study/add',AdminController.add_study_get)

// add job/study post request
router.post('/jobs/add',AdminController.add_job_post)
router.post('/study/add',AdminController.add_study_post)

// edit job/study post request

router.get('/jobs/edit/:id',AdminController.edit_job)
router.get('/studies/edit/:id',AdminController.edit_study)




// Router for wrong urls


// Router for login 

router.get('/login',(req,res)=>{
    res.render("./admin/login")
})

router.post('/login',
  passport.authenticate('local', {failureRedirect: '/' }),
  function(req, res) {
    req.logIn(user, function (err) {
    console.log('login successfull for ',req.user)
    res.redirect('/admin');});
  });

router.get('/*',(req,res)=>{
    res.redirect('/login')
})

module.exports = router