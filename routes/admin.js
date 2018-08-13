var router = require('express').Router();
var AdminController = require('../controllers/AdminController')

/* This router contains all the routes to the professors listing pages and description

*/


router.get('/',AdminController.admin)
router.get('/jobs/add',AdminController.add_job)
router.get('/studies/add',AdminController.add_study)
router.get('/jobs/edit/:id',AdminController.edit_job)
router.get('/studies/edit/:id',AdminController.edit_study)




// Router for wrong urls
router.get('/*',(req,res)=>{
    res.redirect('/admin')
})

module.exports = router