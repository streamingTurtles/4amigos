import React, {useEffect, useState} from "react";
import Draggable from 'react-draggable';
// import GitRepo from "./GitRepo";
// import
const style = {
    content: {
      margin: 50,
      
      width: 700,
      height:500,
      borderStyle: "outset",
      overflow: 'scroll',
      background:"rgb(255,255,255,0.8)"
    },
  };
function BlogNotesAll() {

    const [notes, setNotes] = useState([])

    useEffect(() => {
        fetch("/notes").then(res => {
            if(res.ok){
                return res.json()
            }
        }).then(jsonRes => setNotes(jsonRes));
    })  



    return (
        <Draggable bounds="parent">
    <div className='container' style={style.content}>
        <h1>Here are all the blog notes</h1>

         {/* refactor to own component */}
        {
        notes.map(note =>
        <div key={note._id}>
            <div><h2>{note.title}</h2></div>
            <div><p>{note.githubusername}</p></div>
            <div><p>{note.repoName}</p></div>            
            <div><p>{note.content}</p></div>
        </div>       
        
        )}
        

    </div>
    </Draggable>
    )

}

export default BlogNotesAll;