import React, {useEffect, useState} from "react";

function BlogNotesAll() {

    const [notes, setNotes] = useState([])

    useEffect(() => {
        fetch("/notes").then(res => {
            if(res.ok){
                return res.json()
            }
        }).then(jsonRes => setNotes(jsonRes));
    })  



    return <div className='container'>
        <h1>Here are all the blog notes</h1>

         {/* refactor to own component */}
        {
        notes.map(note =>
        <div key={note._id}>
            <div><h2>{note.title}</h2></div>
            <div><p>{note.userName}</p></div>
            {/* <div><p>{note.gitHubRepo.repo}</p></div>
            <div><p>{note.gitHubRepo.description}</p></div>
            <div><p>{note.gitHubRepo.url}</p></div>             */}
            <div><p>{note.content}</p></div>
        </div>       
        
        )}
        

    </div>

}

export default BlogNotesAll;