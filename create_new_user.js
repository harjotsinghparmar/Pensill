var Users = require("./models/User")
var mongoose = require("mongoose")
var db = "mongodb://gear:satnam123@ds113942.mlab.com:13942/login"

mongoose.connect(db,(err)=>{
  if(!err){
    console.log("connected")
  }
})

    var prof = new Users({
        username: 'pencill',
        password:'handwriting'
    }).save().then((err)=>{
        console.log("saved")
    })
