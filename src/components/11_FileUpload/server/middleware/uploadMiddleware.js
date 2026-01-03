const multer = require('multer');
const path = require('path')
const fs = require('fs')

// --- CONFIGURATION START ---

// 1. Define where to store the file and what to name it
const storage = multer.diskStorage({
    destination: (req,file, cb) =>{
        const uploadPath = 'upload/';

        // Check if folder exists, if not, create it
        if(!fs.existsSync(uploadPath)){
            fs.mkdirSync(uploadPath);
        }

        cb(null, uploadPath)
    },
    /*
        null: "There is no error."
        'uploads/': "Save the file inside the folder named uploads.
    */ 

    filename: (req, file, cb) =>{
       // We rename the file to avoid duplicates (e.g., '167822-profile.jpg')
       const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
       cb(null, uniqueSuffix + path.extname(file.originalname));
    }

    /*
        This code function determines the final name the file will have when saved on your server.
        
        Here is the breakdown of what it does:
        Creates a Unique ID:
        Date.now(): Gets the current timestamp (milliseconds).

        Math.random() * 1e9: Generates a large random number (up to 1 billion).
        Why? Combining these ensures that even if two people upload "image.jpg" at the exact same millisecond, 
        the files won't overwrite each other.

        Preserves Extension:
        path.extname(file.originalname): Extracts the original file type (e.g., .png or .jpg).

        Result:
        Input: profile.jpg
        Output: 16782298712-4827123.jpg (This new name is sent back to Multer via cb).
        In short: It turns a common filename into a unique, random filename so you never accidentally delete an old file by overwriting it.
    */ 
});

// 2. Define which files are allowed (File Validation)
const fileFilter = (req, file, cb) =>{
    // Regex to accept only images
    const allowedFileTypes = /jpeg|jpg|png|gif/;

    // Check extension
    const extname = allowedFileTypes.test(path.extname(file.originalname).toLowerCase())

    // check MIME Type
    const mimetype = allowedFileTypes.test(file.mimetype);

    if(extname && mimetype){
        return cb(null, true) // Accept file
    }
    else{
        cb(new Error('Error: Image Only')) // Reject File
    }
}

// 3. Initialize Multer with the config options
const upload = multer({
    storage: storage,
    limits: {fileSize: 5 * 1024 * 1024}, // Limit file size to 5MB
    fileFilter: fileFilter
})

module.exports = upload;