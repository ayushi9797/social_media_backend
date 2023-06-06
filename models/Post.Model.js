const mongoose = require('mongoose');
const PostSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.ObjectId, ref: 'User' },
    text: String,
    image: String,
    createdAt: Date,
    likes: [{ type: mongoose.Schema.ObjectId, ref: 'User' }],
    comments: [{
        user: { type: mongoose.Schema.ObjectId, ref: 'User' },
        text: String,
        createdAt: Date
    }]
});

const PostModel = mongoose.model('Post', PostSchema);

module.exports = PostModel