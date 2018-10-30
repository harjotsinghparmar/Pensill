/* TBD: 
-- check if user is logged in 
    
Done
-   Need to import the models for Jobs here and them display -- Done
    
    
 */
// import jobs data from databases
var Opportunity = require('../models/Post')


exports.listing = (req,res)=>{
    Opportunity.find({}).exec((err,data)=>{
        res.render('listing/jobs',{job_list:data})
    })
}


// Using regex to match posts 

exports.listing_search = (req,res)=>{
var query = req.body.search_query;
Opportunity.find({theme:{$regex: query, $options:'i'}}).exec((err,data)=>{
    res.render('listing/jobs',{job_list:data})
})
}

exports.listing_description = (req,res)=>{
    var job_id = req.params.id
    Opportunity.findById(job_id).exec((err,data)=>{
        res.render('listing/jobs_description',{data:data})
    })
}

