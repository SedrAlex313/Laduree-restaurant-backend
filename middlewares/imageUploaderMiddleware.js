const multer = require("multer");

const path = require("path");
const fs = require("fs");

require("dotenv").config();

const cloudinary = require("cloudinary").v2;
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const storage = multer.memoryStorage();

//  if you need to process the files further before uploading them to Cloudinary.

// multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "./public/");
//   },
//   filename: function (req, file, cb) {
//     console.log("file", file);
//     cb(null, Date.now() + file.originalname);
//   },
// });

const fileFilter = (req, file, cb) => {
  if (file.mimetype.startsWith("image")) {
    cb(null, true);
  } else {
    // Send Not an image! Please upload only images
    cb({ message: "Unsupported file format" }, false);
  }
};

const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
});

exports.mealImageUploader = upload.single("image");

exports.uploadToCloudinary = (req, res, next) => {
  if (!req.file) next();

  const file = req.file.buffer.toString("base64");
  // const filePath = req.file.path;
  cloudinary.uploader.upload(
    `data:image/png;base64,${file}`,
    // filePath,
    { folder: "Meals" },
    function (error, result) {
      if (error) {
        res.status(500).send("Error uploading image");
      } else {
        // delete the file from disk
        // fs.unlink(filePath, (err) => {
        //   if (err) {
        //     console.error(err);
        //   }
        // });

        req.image = result.secure_url;
        next();
      }
    }
  );
};
