var Professors = require("./models/Professor")
var mongoose = require("mongoose")
var list = require('./syde_faculty')
var db = "mongodb://gear:*****@lol123123.lolasd.com:13942/login"
mongoose.connect(db,(err)=>{
  if(!err){
    console.log("connected")
  }
})

for(x= 0; x< (list.length);x++){
    console.log(list[x].name)
    var prof = new Professors({
      name: list[x].name,
      job_title: list[x].job_title,
      email:list[x].email,
      phone: list[x].phone,
      location: list[x].location,
      profile_image: list[x].profile_image,
      research_interest: list[x].research_interests,
      biography: list[x].biography
    }).save().then((err)=>{
        console.log("saved")
    })
}

