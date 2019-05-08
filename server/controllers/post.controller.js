const Post = require('../models/post.model');

// Get all posts
module.exports.getPost = async (req, res) => {
    const post = await Post.find();
    res.json(post);
};