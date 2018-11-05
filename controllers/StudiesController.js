var mongoose = require("mongoose")
var gridFs = require('gridfs-stream')
var Study = require("../models/ResearchStudies")

// @desc: Create connection with database

var db = 'mongodb://gear:satnam123@ds113942.mlab.com:13942/login'
var conn = mongoose.createConnection(db)

let gfs;

conn.once("open", function(){
    gfs = gridFs(conn.db, mongoose.mongo)
    gfs.collection('uploads')
})


exports.file_url = (req,res)=>{
    gfs.files.find().toArray((err,files)=>{
        console.log(files)
    })
    res.send("You have raeched the files listing page")
}

exports.file_url_by_id = (req,res)=>{
    var file_id = req.params.id
    console.log("You request for image at the id ", file_id)
    gfs.files.findOne({filename:file_id},(err,file)=>{
        console.log(file.filename)
        var readStream = gfs.createReadStream(file.filename)
        readStream.pipe(res)
    })
}


exports.listing = (req,res)=>{
    Study.find({},(err,data)=>{
        console.log(data)
        res.render('listing/study',{studies:data})
    })

}


exports.listing_description = (req,res)=>{
    res.send(' You have reached studies description page ')
}

