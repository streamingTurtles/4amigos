import React, {useState} from "react";
import axios from "axios"


function BlogNoteAdd() {
    const [input, setInput] = useState({
        title: '',
        content: '',
        gitHubRepo: {},
        username: ''
    })
    
    
// handles the submit button click
// pass in the username - useRef hook  instead of getdocumentById 
    function handleSubmitGitHub(e){
        e.preventDefault()
        // do the api github call here
        // do a srpead operator here
        // gitHubLink 
        // .then - set the state for gitHubRepo
    }


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
            content: input.content,
            username: input.username,
            gitHubRepo: input.gitHubRepo
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
                <input type="submit" className="btn btn-primary ml-2 mb-5" value="CLICK HERE TO GET MY REPO" onClick={handleSubmitGitHub}></input>
                <ul id="userRepos"className="list-group mx-auto mb-5"></ul>
            </div> 





            <div className='form-group'>
                <textarea onChange={handleChange} name="content" value={input.content} autoComplete="off" className="form-control" placeholder="blog content"></textarea>
            </div>

            <button onClick={handleClick} className="btn btn-lg btn-info">Add Note</button>
        </form>




    </div>
}

export default BlogNoteAdd;


            /* <div className='form-group'>
                <input onChange={handleChange} name="repolink" value={input.repolink} autoComplete="off" className="form-control" placeholder="blog repolink"></input>
            </div> */