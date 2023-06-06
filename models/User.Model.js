const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    dob: Date,
    bio: String,
    posts: [{ type: mongoose.Schema.ObjectId, ref: 'Post' }],
    friends: [{ type: mongoose.Schema.ObjectId, ref: 'User' }],
    friendRequests: [{ type: mongoose.Schema.ObjectId, ref: 'User' }]
});

const UserModel = mongoose.model('user', UserSchema);

module.exports = UserModel