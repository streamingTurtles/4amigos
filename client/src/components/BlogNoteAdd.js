import React, {useState} from "react";
import axios from "axios"


function BlogNoteAdd() {
    const [input, setInput] = useState({
        title: '',
        // repolink: '',
        content: ''
    })
    
    
    function handleChange(event){
        // console.log(event.target);
        const {name, value} = event.target;
        
        setInput(prevInput => {
            return{
                ...prevInput,
                [name]: value
            }
        })
    }

    
    function handleClick(event){
        event.preventDefault();
        console.log("input happened how", input);

        const newNote = {
            title: input.title,
            // repolink: input.repolink,
            content: input.content
        }

        // console.log(input);
        // where do we want to POST to - the address of our backend server
        // send the object data to this route, its the new blog post
        axios.post('http://localhost:3001/create', newNote)
        // make sure to specify this address in our noteRoute.js file
    }
    
     
    return <div className='container'>
        <h1>Members can add a note to the blog here:</h1>
        <form>
            <div className='form-group'>
                <input onChange={handleChange} name="title" value={input.title} autoComplete="off" className="form-control" placeholder="blog title"></input>
            </div>

            <div className='form-group'>
                <input onChange={handleChange} name="repolink" value={input.repolink} autoComplete="off" className="form-control" placeholder="blog repolink"></input>
            </div>

            <div className='form-group'>
                <textarea onChange={handleChange} name="content" value={input.content} autoComplete="off" className="form-control" placeholder="blog content"></textarea>
            </div>

            <button onClick={handleClick} className="btn btn-lg btn-info">Add Note</button>
        </form>
    </div>

}

export default BlogNoteAdd;