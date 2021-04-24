import React, {useEffect, useState} from "react";
import axios from "axios"
// import GitRepo from "./GitRepo";
// import
import Draggable from 'react-draggable';
// import GitRepo from "./GitRepo";
// import
const style = {
    content: {
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
            console.log(res)
            if(res.ok){
                return res.json()
            }
        }).then(jsonRes => {
            console.log(jsonRes)
            setNotes(jsonRes)});
    },[])  



    return (
        
       
        <Draggable bounds="parent">
        <div className='container' style={style.content}>
       
 <h1 style={{position: 'sticky',top: '0px',backgroundColor:"white"}}>Here are all the blog notes</h1>
         
        {
        notes.reverse().map(note =>
        <div key={note._id}>
            <div><h2>{note.title}</h2></div>
            <div><p>{note.githubusername}</p></div>
            <div><p>{note.repoName}</p></div>            
            <div><p>{note.content}</p></div>
            <button onClick={()=>{
                 axios({
                    method: "delete",
                    url: `/notes/delete/${note._id}`,
                }).then(res => {
                    console.log(res);
                    fetch("/notes").then(res => {
                        console.log(res)
                        if(res.ok){
                            return res.json()
                        }
                    }).then(jsonRes => {
                        console.log(jsonRes)
                        setNotes(jsonRes)});
                    
                });  
            }}>Delete</button>
        </div>       
        
        )}
        

    </div>
    </Draggable>
    )

}


export default BlogNotesAll;