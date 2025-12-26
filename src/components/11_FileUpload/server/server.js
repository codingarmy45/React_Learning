const express = require("express");
const multer = require("multer");
const cors = require("cors");

const app = express();
app.use(cors());

const storage = multer.diskStorage({
  destination: "uploads/",
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage });

app.post("/upload", upload.single("file"), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: "No file uploaded" });
  }

  // Simulate delay (for progress testing)
  setTimeout(() => {
    res.status(200).json({
      message: "File uploaded successfully",
      file: req.file.filename,
    });
  }, 1000);
});

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});
