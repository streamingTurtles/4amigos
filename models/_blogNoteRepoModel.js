const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const blogNoteRepoSchema = new Schema ({
    _id: {type: String},
    title: String,
    // repolink: String,
    githubusername: String,
    content: String
});

const Blog = mongoose.model("Blog",blogNoteRepoSchema)

module.exports = Blog;





