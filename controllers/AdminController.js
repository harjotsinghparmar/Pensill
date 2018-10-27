/* TBD: 
    -   Need to import the models for Professor here and them display
    
 */

 // Admin Page
// import DB 

var passport = require('passport')
var Opportunity = require("../models/Post")


exports.AuthCheck = (req,res,next)=>{
    console.log("Checking Autherization", req.user)
    if(!req.user){
        res.redirect('/login')
    }
    res.locals.user = req.user
    next()
}



 exports.admin = (req,res)=>{
     console.log('rendering admin page')
     
     res.render('admin/dashboard')
 }

// Login controller
exports.postLogin = (req, res, next) => {
    req.assert('password', 'Password cannot be blank').notEmpty();
  
    const errors = req.validationErrors();
  
    if (errors) {
      return res.redirect('/login');
    }
  
    passport.authenticate('local', (err, user, info) => {
      if (err) { return next(err); }
      if (!user) {
        console.log('No such user')
        return res.redirect('/login');
      }
      req.logIn(user, (err) => {
        if (err) { return next(err); }
        console.log("user successfully logged in")
        res.redirect(req.session.returnTo || '/admin');
      });
    })(req, res, next);
  };


  // Login controller
exports.logout = (req,res)=>{
    console.log("You are logging out")
    req.logout()
    res.redirect('/')
}


 // pages to display opportunities and research studies
 exports.opportunities = (req,res)=>{
    var mssg = req.query.mssg
    console.log(mssg)
Opportunity.find({}).then((data)=>{
    res.render('admin/opp',{opp: data,mssg:mssg})
}) 
}

// studies listing page
exports.study = (req,res)=>{
    var mssg = req.query.mssg
    console.log(mssg)
Opportunity.find({}).then((data)=>{
    res.render('admin/study',{opp: data,mssg:mssg})
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
    var opp = new Opportunity({
        title: req.body.title,
        description: req.body.op_description,
        theme: req.body.op_keywords.split(","),
        requirements: req.body.op_requirements.split(",")
    })
    
    opp.save().then(console.log("done saving"))

    res.redirect("/admin/jobs")}

exports.add_study_post = (req,res)=>{
    console.log("we are in the controller now")
    console.log(req.body)
    
    res.json({file:req.file})
}

// Edit pages

exports.edit_job = (req,res)=>{
    var job_id = req.params.id
    Opportunity.findById(job_id).exec((err,data)=>{
        console.log(data)
        res.render('./admin/edit_job',{opportunity:data})
    })
}
exports.edit_job_post = (req,res)=>{
    var job_id = req.params.id
    var update = {
        title: req.body.title,
        description: req.body.op_description,
        theme: req.body.op_keywords.split(","),
        requirements: req.body.op_requirements.split(',')
    }

    Opportunity.findByIdAndUpdate(job_id,update,{new:true},(err,data)=>{
        console.log("data has been updated to")
        var mssg = "Opportunity successfully updated"
        res.redirect('/admin/jobs/?mssg='+mssg)
    })
}


exports.edit_study = (req,res)=>{
    res.send(' You have reached study editing page ')
}


