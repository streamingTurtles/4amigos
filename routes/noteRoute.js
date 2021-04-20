const express = require("express");
const router = express.Router();
const Note = require("../models/noteModel");


// specify here the address where we sent our newNote
// its the http://localhost:3001/create  address
router.route("/create").post((req, res) => {
    const title = req.body.title;
    // const repolink = req.body.repolink;
    const content = req.body.content;
    const newNote = new Note ({
        title,
        // repolink,
        content
    })

    newNote.save();
})

// another routed needed to now get from the DB to show 
// on the frontend.  This time it will be a get request since
// we are retreving from the db.
router.route("/notes").get((req, res) =>{
    Note.find()
        .then(foundNotes => res.json(foundNotes))
})
// now send the received Note model from the backend to the 
// front end in our all blog notes component


module.exports = router;


