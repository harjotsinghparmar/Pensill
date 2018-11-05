// import mongoose and setup schema 

var mongoose = require('mongoose')
var Schema = mongoose.Schema

/*  Post schema 
contains the 
     title,
     description,
     theme,
     expiry,
/* 

/* TBD 
Add detailed description of the schema 
  - Posting details need to be sorted out
  - More variables:
   - Funding 
   - Position 
   - Skills Requirements 
   - Professors Assocaited 
   - Document to be submitted 
   - Professor to reach out to 
  */

var PostSchema = new Schema({
    title:{
        type: String
    },
    description:{
        type: String
    },
    theme:{
        type:[String]
    },
    requirements:{
        type:[String]
    },
    candidate_type:{
        type: String
    },
    funding_amount:{
        type:String
    },
    funding_available:{
        type:String
    },
    post_date : {
        type : Date, default : Date.now
    }, 
    contact_details:{
        type:String
    },
    deadine:{
        type:String
    },
    status:{
        type:String, default:'active'
    }


    
})

// Define the virtual for the book post

PostSchema.virtual('url').get(()=>{
    return '/posts/'+this._id
})

module.exports = mongoose.model('Post',PostSchema)