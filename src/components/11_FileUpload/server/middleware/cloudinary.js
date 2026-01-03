const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const multer = require('multer');

// 1. Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

// 2. Configure Storage Engine
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'user-profiles', // Folder name in Cloudinary
    allowed_formats: ['jpg', 'png', 'jpeg'],
  },
});

// 3. Initialize Multer
const upload = multer({ storage });

module.exports = upload;