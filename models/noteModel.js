const mongoose = require("mongoose");

const notesSchema = {
    // _id: {type: String},
    title: String,
    userName: String,
    githubRepo: {
        repo: String,
        description: String,
        url: String
    },
    content: String
}

const Note = mongoose.model("Note", notesSchema);

module.exports = Note;