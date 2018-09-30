/* TBD: 
-- check if user is logged in 
    
Done
-   Need to import the models for Jobs here and them display -- Done
    
    
 */
// import jobs data from databases
var Professors = require('../models/Professor')


exports.listing = (req,res)=>{
    Professors.find({}).sort({"research_interest":-1}).exec((err,data)=>{
        console.log(data)
        res.render('listing/faculty',{list:data})
    })
}


// Using regex to match posts 

exports.listing_search = (req,res)=>{
var query = req.body.search_query;
Professors.find({research_interest:{$regex: query, $options:'i'}}).sort({"research_interest":-1}).exec((err,data)=>{
    res.render('listing/faculty',{list:data})
})
}

exports.listing_description = (req,res)=>{
    res.send(' You have reached Professors description page ')
}

