// Import passport to use strategy 

var router = require('express').Router();
var passport = require("passport")
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
        const filename =  buf.toString('hex');
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



router.get('/', AdminController.AuthCheck, AdminController.admin)


router.get('/jobs', AdminController.AuthCheck, AdminController.opportunities)
router.get('/study',AdminController.AuthCheck, AdminController.study)


// add job / study get request
router.get('/jobs/add',AdminController.AuthCheck, AdminController.add_job_get)
router.get('/study/add',AdminController.AuthCheck, AdminController.add_study_get)

// add job/study post request
router.post('/jobs/add',AdminController.AuthCheck, AdminController.add_job_post)
router.post('/study/add',upload.single('file'),AdminController.AuthCheck, AdminController.add_study_post)

// edit job/study post request

router.get('/jobs/edit/:id',AdminController.AuthCheck, AdminController.edit_job)
router.post('/jobs/edit/:id',AdminController.AuthCheck, AdminController.edit_job_post,AdminController.opportunities)

router.get('/studies/edit/:id',AdminController.AuthCheck, AdminController.edit_study)
router.post('/studies/edit/:id',AdminController.AuthCheck, AdminController.edit_study)

// router to make a study inactive

router.get('/jobs/toggle_status/:id', AdminController.AuthCheck, AdminController.toggle_status )



// Router for wrong urls



// Router for login 

router.get('/login',AdminController.LoginByPass)

router.get('/logout',AdminController.logout)

router.post('/login',AdminController.postLogin)

router.get('/*',(req,res)=>{
    res.redirect('/')
})

module.exports = router