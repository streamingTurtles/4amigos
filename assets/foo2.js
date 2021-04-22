// import React, {useState} from "react";
import React, {useEffect, useState} from "react";
import axios from "axios"
// import REPOApp from "../utils/REPOApp";
import REPOList from "../components/REPOList";
import REPOLoading from "../components/REPOLoading";


function BlogNoteAdd() {
    const [input, setInput] = useState({
        title: '',
        content: '',
        gitHubRepo: {},
        username: ''
    });
    
 


    function handleSubmitGitHub(){}
    // function handleSubmitGitHub(e, username){
    //     e.preventDefault();
    //     // REPOApp();
    //     // GitHub endpoint, dynamically passing in specified username
    //     const apiurl = `https://api.github.com/users/${username}/repos?per_page=30`;
    //     axios.get(apiurl)
    //          .then(res =>{
    //              const repoResults = res.data;
    //              const results = repoResults.map(noteModel.gitHubRepo =>{

    //              })
    //          })



  
    // }




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
            githubusername: input.githubusername,
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
                <input 
                    onChange={handleChange} 
                    // onChange={e => setUsername(e.target.value)}
                    name="repolink" 
                    value={input.githubusername} 
                    autoComplete="off" 
                    className="form-control" 
                    placeholder="gitHub Username Here"></input>
                <input 
                    type="submit" 
                    className="btn btn-primary ml-2 mb-5" 
                    value="CLICK HERE TO GET MY REPO" 
                    onClick={handleSubmitGitHub("streamingturtles")}></input>
                {/* <button 
                    className="button"
                    onClick={handleSubmit}>{loading ? "Searching..." : "Search"}    
                </button> */}
                {/* <ul id="userRepos"className="list-group mx-auto mb-5"></ul> */}
            </div> 
                {/* <div className='repo-container'>
                <Loading isLoading={appState.loading} repos={appState.repos} />
                </div> */}





            <div className='form-group'>
                <textarea onChange={handleChange} name="content" value={input.content} autoComplete="off" className="form-control" placeholder="blog content"></textarea>
            </div>

            <button onClick={handleClick} className="btn btn-lg btn-info">Add Note</button>
        </form>




    </div>
}

export default BlogNoteAdd;


         