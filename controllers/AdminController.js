/* TBD: 
    -   Need to import the models for Professor here and them display
    
 */

 // Admin Page

 exports.admin = (req,res)=>{
     res.send(' You have reached your admin page')
 }

// Add pages

exports.add_job = (req,res)=>{
    res.send(' You have reached the admins job adding page')
}

exports.add_study = (req,res)=>{
    res.send(' You have reached study adding page ')
}

// Edit pages

exports.edit_job = (req,res)=>{
    res.send(' You have reached the job editing page')
}

exports.edit_study = (req,res)=>{
    res.send(' You have reached study editing page ')
}

