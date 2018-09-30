/* TBD: 
    -   Need to import the models for Professor here and them display
    
 */

 // Admin Page

 

 exports.admin = (req,res)=>{
     res.send(' You have reached your admin page')
 }

// Add pages get request

exports.add_job_get = (req,res)=>{
    res.render('./admin/add_job')
}

exports.add_study_get = (req,res)=>{
    res.render('./admin/add_study')
}
// Add pages post request

exports.add_job_post = (req,res)=>{
    res.render('./admin/add_job')
}

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

