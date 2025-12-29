const express = require('express');
const router = express.Router();
// const upload = require('../middleware/uploadMiddleware');
const upload = require('../middleware/cloudinary')
const uploadController = require('../controller/uploadController')

// 'image' is the key name you must use in Postman or React FormData
router.post('/upload', upload.single('image'), uploadController)

module.exports = router;