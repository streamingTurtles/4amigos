const express = require("express");
const router = express.Router();
const Blog = require("../../models/blogNoteRepoModel");


router.route("/create").post((req, res) => {
    console.log(req.body);
    const title = req.body.title;
    const repoName = req.body.repoName;
    const content = req.body.content;
    const githubusername = req.body.githubusername;
    const newBlogPost = new Blog ({
        title,
        repoName,
        content,
        githubusername
    })

    newBlogPost.save();
})

module.exports = router;