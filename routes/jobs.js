var router = require('express').Router();
var JobsListingController = require('../controllers/JobsController')

/* This router contains all the routes to the studies listing pages and description

*/

router.get('/',(req,res)=>{
    res.redirect('/opportunities/jobs')
})

router.get('/listing',JobsListingController.listing)
//Listing page after search
router.post('/listing',JobsListingController.listing_search)

// Listing description page
router.get('/listing/:id',JobsListingController.listing_description)


module.exports = router