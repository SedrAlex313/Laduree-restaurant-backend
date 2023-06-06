var express = require("express");

const asyncHandler = require("express-async-handler");
const Post = require("../models/postModel").model;

//Get all the posts
const getAllPosts = asyncHandler(async (req, res) => {
  try {
    const posts = await Post.find();
    res.status(200).json(posts);
  } catch (error) {
    res.status(404).json({
      message: error.message,
    });
  }
});

//create new post
const createPost = asyncHandler(async (req, res) => {
  const newPost = new Post(req.body);
  try {
    await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    res.status(409).json({
      message: error.message,
    });
  }
});


module.exports = {
    getAllPosts,    
    createPost
}

