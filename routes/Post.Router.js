const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const PostModel = require('../models/Post.Model');
const app = express();

const PostRouter = express.Router();
PostRouter.use(express.json());

// post
// get
// patch
// delete










module.exports = PostRouter;
