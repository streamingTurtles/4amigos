const express = require("express");
const router = express.Router();
const Note = require("../models/noteModel");
// const Blog = require("../../models/blogNoteRepoModel");
router.route("/notes/delete/:id").delete((req,res)=>{
    console.log(req.params)
    Note.deleteOne({_id:req.params.id},(error)=>{
        if(error){
            console.log(error)
            res.sendStatus(400)
        }else{
            res.sendStatus(204)
        }
    })
  
})

// specify here the address where we sent our newNote
// its the http://localhost:3001/create  address
router.route("/create").post((req, res) => {
    console.log(req.body);
    const title = req.body.title;
    const repoName = req.body.repoName;
    const content = req.body.content;
    const githubusername = req.body.githubusername;
    const newBlogPost = new Note ({
        title,
        repoName,
        content,
        githubusername
    })

    newBlogPost.save();
})

// another routed needed to now get from the DB to show 
// on the frontend.  This time it will be a get request since
// we are retreving from the db.
// ??? /notes, "notes" is the name of the collection in the mongo Atlas cloud db  ???
router.route("/notes").get((req, res) =>{
    Note.find()
        .then(foundNotes => res.json(foundNotes))
})
// now send the received Note model from the backend to the 
// front end in our all blog notes component


module.exports = router;


