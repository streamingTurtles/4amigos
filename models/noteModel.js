const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const notesSchema = new Schema({
    title: String,
    userName: String,
    githubRepo: {
        repo: String,
        description: String,
        url: String
    },
    content: String
});

const Note = mongoose.model("Note", notesSchema);

module.exports = Note;