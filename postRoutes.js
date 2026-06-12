const express = require("express");
const Post = require("../models/Post");

const router = express.Router();

// Get all posts
router.get("/", async (req, res) => {
  const posts = await Post.find();
  res.json(posts);
});

// Create post
router.post("/", async (req, res) => {
  const post = new Post(req.body);

  await post.save();

  res.json(post);
});

// Update post
router.put("/:id", async (req, res) => {
  const post = await Post.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  res.json(post);
});

// Delete post
router.delete("/:id", async (req, res) => {
  await Post.findByIdAndDelete(req.params.id);

  res.json({
    message: "Post Deleted"
  });
});

module.exports = router;