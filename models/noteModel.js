const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const notesSchema = new Schema({
    title: String,
    githubusername: String,
    content: String,
    repoName: String
});

const Note = mongoose.model("Note", notesSchema);

module.exports = Note;