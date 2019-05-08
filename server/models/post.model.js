const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
    title: String,
    img: String,
    trailer: String,
});

module.exports = Post = mongoose.model('Post', postSchema, 'posts');