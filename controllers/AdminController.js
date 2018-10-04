/* TBD: 
    -   Need to import the models for Professor here and them display
    
 */

 // Admin Page
// import DB 
var Opportunity = require("../models/Post")


 

 exports.admin = (req,res)=>{
     res.render('admin/dashboard')
 }

 // pages to display opportunities and research studies
 exports.opportunities = (req,res)=>{
Opportunity.find({}).then((data)=>{
    console.log(data)
    res.render('admin/opp',{opp: data})
})
    
}

// Add pages get request

exports.add_job_get = (req,res)=>{
    res.render('admin/add_job')
}

exports.add_study_get = (req,res)=>{
    res.render('admin/add_study')
}
// Add pages post request

exports.add_job_post = (req,res)=>{
    console.log(req.body.title)
    var opp = new Opportunity({
        title: req.body.title,
        description: req.body.op_description,
        theme: req.body.op_keywords
    })

    opp.save().then(console.log("done saving"))

    res.redirect("/admin/jobs")}

exports.add_study_post = (req,res)=>{
    res.render('./admin/add_study')
}

// Edit pages

exports.edit_job = (req,res)=>{
    res.send(' You have reached the job editing page')
}

exports.edit_study = (req,res)=>{
    res.send(' You have reached study editing page ')
}


