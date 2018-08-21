var jobs = require("./models/Post")
var faker = require("faker")
var mongoose = require("mongoose")
// Define mongoose connection
// local db var db = 'mongodb://localhost:27017/mycustomers'
var db = "mongodb://gear:satnam123@ds113942.mlab.com:13942/login"
mongoose.connect(db,(err)=>{
  if(!err){
    console.log("connected")
  }
})

var data = {
    title:faker.commerce.productName(),
    description: faker.lorem.paragraphs(),
    theme:[faker.commerce.productAdjective(),faker.commerce.productAdjective(),faker.commerce.productAdjective()],
    expiry:faker.date.recent()
}

var dummy_data = new jobs(data)
dummy_data.save().then((err)=>{
    console.log("saved")
})

// console.log(data)

for (x= 0; x<100;x++){
    var data = {
        title:faker.commerce.productName(),
        description: faker.lorem.paragraphs(),
        theme:[faker.commerce.productAdjective(),faker.commerce.productAdjective(),faker.commerce.productAdjective()],
        expiry:faker.date.recent(),
        image_url: faker.image.business()
    }
    
    var dummy_data = new jobs(data)
    dummy_data.save().then((err)=>{
        console.log("saved")
    })

    
}