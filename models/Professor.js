// import mongoose and setup schema 

var mongoose = require('mongoose')
var Schema = mongoose.Schema

/*  Professor schema 
contains the 
     name,
     designation,
     contact details,
     basic research themes,
/* 
 

// TBD 
 - Add more details 
    - Professors Bio 
    - Background 
    - Labs association 
    - Positions 
    - Awards if any 
    - Other profile links 
 */

var ProfessorSchema = new Schema({
    name:{
        type: String
    },
    designation:{
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
    themes:{
        type:[String]
    }
})

// Define the virtual for the professor profile url, this is basically generated when requested

ProfessorSchema.virtual('url').get(()=>{
    return '/professor/'+this._id
})

module.exports = mongoose.model('Professor',LabSchema)
