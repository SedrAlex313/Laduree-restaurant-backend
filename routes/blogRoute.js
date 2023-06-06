const express = require("express");
const { createPost, getAllPosts } = require("../controllers/blogController");
const router = express.Router()


router.post("/createpost",createPost);
router.get("/getposts",getAllPosts);

module.exports = router