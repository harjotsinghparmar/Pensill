// import mongoose and setup schema 

var mongoose = require('mongoose')
var Schema = mongoose.Schema

/*  Research Studies schema contains  
   - title
   - details
   - contact 
/* 

/* TBD 
Add detailed description of the schema 
  - Research Posting details need to be sorted out
  - More variables:
    - Image upload 
    - Other details to be found from the RS posters and online analysis
  */

var ResearchSchema = new Schema({
    title:{
        type: String
    },
    details:{
        type: String
    },
    contact:{
        email:{
            type:String
        },
        others:{
            type:String
        }
    },
})

// Define the virtual for the professor profile url, this is basically generated when requested

ProfessorSchema.virtual('url').get(()=>{
    return '/research_studies/'+this._id
})

module.exports = mongoose.model('Research',LabSchema)
