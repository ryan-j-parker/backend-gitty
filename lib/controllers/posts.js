const { Router } = require('express');
const authenticate = require('../middleware/authenticate');
const Post = require('../models/Post');

module.exports = Router().get('/', async (req, res, next) => {
  try {
    const res = await Post.getAll();
    res.json();
  } catch (e) {
    next(e);
  }
});
