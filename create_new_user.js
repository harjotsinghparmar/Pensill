var Users = require("./models/User")
var mongoose = require("mongoose")
var db = "mongodb://gear:lol123123@lol123123.lolasd.com:13942/login"

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
