var router = require('express').Router();
var AdminController = require('../controllers/AdminController')


/* This router contains all the routes to the professors listing pages and description

*/


router.get('/',AdminController.admin)
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
router.get('/*',(req,res)=>{
    res.redirect('/admin')
})

module.exports = router