// Import passport to use strategy 

var router = require('express').Router();
var passport = require("passport")
var LocalStrategy = require("passport-local").Strategy
var AdminController = require('../controllers/AdminController')
var multer  = require('multer')
var crypto = require('crypto')

//Gridfs setup 

const GridFsStorage = require('multer-gridfs-storage');
 
var storage = new GridFsStorage({
  url:'mongodb://gear:satnam123@ds113942.mlab.com:13942/login',
  file: (req, file) => {
    return new Promise((resolve, reject) => {
      crypto.randomBytes(16, (err, buf) => {
        if (err) {
          return reject(err);
        }
        console.log('we are in multer')
        console.log(req.body)
        var title = req.body.title
        var amount = req.body.amount
        const filename = title+'_'+amount+"_"+file.originalname+'.jpg';
        console.log("file name is "+filename)
        const fileInfo = {
          filename: filename,
          bucketName: 'uploads'
        };
        resolve(fileInfo);
      });
    });
  }
});

  
var upload = multer({ storage: storage })


/* This router contains all the routes to the professors listing pages and description



*/

// passport setup local strategy
passport.use(new LocalStrategy(
    function(username, password, done) {
        console.log('In local strategy')
      User.findOne({ username: username }, function (err, user) {
        if (err) { return done(err); }
        if (!user) { return done(null, false); }
        if (!user.verifyPassword(password)) { return done(null, false); }
        return done(null, user);
      });
    }
  ));



router.get('/',AdminController.admin)


router.get('/jobs',AdminController.opportunities)
router.get('/study',AdminController.study)


// add job / study get request
router.get('/jobs/add',AdminController.add_job_get)
router.get('/study/add',AdminController.add_study_get)

// add job/study post request
router.post('/jobs/add',AdminController.add_job_post)
router.post('/study/add',upload.single('file'),AdminController.add_study_post)

// edit job/study post request

router.get('/jobs/edit/:id',AdminController.edit_job)
router.post('/jobs/edit/:id',AdminController.edit_job_post,AdminController.opportunities)

router.get('/studies/edit/:id',AdminController.edit_study)
router.post('/studies/edit/:id',AdminController.edit_study)




// Router for wrong urls


// Router for login 

router.get('/login',(req,res)=>{
    res.render("./admin/login")
})

router.post('/login',
(req,res)=>{
    res.redirect('/admin/')
})

router.get('/*',(req,res)=>{
    res.redirect('/login')
})

module.exports = router