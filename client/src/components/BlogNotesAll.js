import React, {useEffect, useState} from "react";

function BlogNotesAll() {

    const [notes, setNotes] = useState([{
        title: '',
        // repolink: '',
        content: ''
    }])

    useEffect(() => {
        fetch("/notes").then(res => {
            if(res.ok){
                return res.json()
            }
        }).then(jsonRes => setNotes(jsonRes));
    })  



    return <div className='container'>
        <h1>Here are all the blog notes</h1>

        {
        notes.map(note =>
        <div><h1>{note.title}</h1> 
        {/* <p>{note.repolink}</p>  */}
        <p>{note.content}</p></div> 
        
        
        )}

    </div>

}

export default BlogNotesAll;