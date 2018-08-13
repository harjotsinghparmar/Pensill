var router = require('express').Router();
var JobsListingController = require('../controllers/JobsController')

/* This router contains all the routes to the studies listing pages and description

*/

router.get('/',(req,res)=>{
    res.redirect('/jobs/listing')
})

router.get('/listing',JobsListingController.listing)

router.get('/listing/:id',JobsListingController.listing_description)


module.exports = router