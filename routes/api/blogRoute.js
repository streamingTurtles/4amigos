const express = require("express");
const router = express.Router();
const Blog = require("../../models/blogNoteRepoModel");


router.route("/create").post((req, res) => {
    const title = req.body.title;
    const repo = req.body.repo;
    const content = req.body.content;
    const newBlogPost = new Blog ({
        title,
        repo,
        content
    })

    newBlogPost.save();
})

module.exports = router;