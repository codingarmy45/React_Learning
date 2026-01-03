const uploadController = (req,res) =>{
    try{
        if(!req.file){
            return res.status(400).json({success:false, message:'Please upload the file'})
        }

        console.log(req.file);
        // Output example: 
        // { 
        //   path: 'uploads/123456-profile.jpg', 
        //   originalname: 'profile.jpg', 
        //   size: 2048 
        // }

        res.status(200).json({success:true, message: 'File uploaded successfully', filePath: req.file.path})

        
    }
    catch(err){
        res.status(500).json({success:false, message:err.message})
    }
}

module.exports = uploadController;