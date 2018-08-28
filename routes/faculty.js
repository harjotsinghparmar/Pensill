var router = require('express').Router();
var FacultyListingController = require('../controllers/FacultyController')

/* This router contains all the routes to the studies listing pages and description

*/

router.get('/',(req,res)=>{
    res.redirect('/faculty/listing')
})

router.get('/listing',FacultyListingController.listing)
//Listing page after search
router.post('/listing',FacultyListingController.listing_search)

// Listing description page
router.get('/listing/:id',FacultyListingController.listing_description)


module.exports = router