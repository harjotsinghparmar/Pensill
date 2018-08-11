// import mongoose and setup schema 

var mongoose = require('mongoose')
var Schema = mongoose.Schema



/*  Lab schema 
contains the 
     name,
     description,
     members - Professors,
     basic research themes,
*/

/* TBD 
    - Image
    - Link to official website
     */

var LabSchema = new Schema({
    name:{
        type: String
    },
    description:{
        type: String
    },
    members:[{
        type: Schema.Types.ObjectId,
        ref:'Professor'
    }],
    director:{
        type:String
    },
    contact:{
        type:String
    }
})

// Define the virtual for the book url, this is basically generated when requested

LabSchema.virtual('url').get(()=>{
    return '/labs/'+this._id
})

module.exports = mongoose.model('Lab',LabSchema)