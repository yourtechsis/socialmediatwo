const express = require('express');

const router = express.Router();

// @route GET api/posts/test
// testing a route to post
// this is a public route
router.get('/test', (req, res) => res.json({msg: "posts works"}));






module.exports = router;

