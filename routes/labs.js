var router = require("express").Router()
var LabsController = require("../controllers/LabsController")


// Define the route
router.get('/listing',LabsController.listing)
router.get('/listing/:id',LabsController.listing_description)

module.exports = router