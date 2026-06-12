const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
  postId: String,
  user: String,
  comment: String
}, { timestamps: true });

module.exports = mongoose.model("Comment", commentSchema);