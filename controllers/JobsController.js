/* TBD: 
-- check if user is logged in 
    
Done
-   Need to import the models for Jobs here and them display -- Done
    
    
 */
// import jobs data from databases
var Jobs = require('../models/Post')

exports.listing = (req,res)=>{
    Jobs.find({},(err,data)=>{
        console.log('data recieved')
        res.json(data)
    })
    
}

exports.listing_description = (req,res)=>{
    res.send(' You have reached jobs description page ')
}

