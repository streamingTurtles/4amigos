// import React, {useState} from "react";
import React, {useEffect, useState} from "react";
import axios from "axios"
// import REPOApp from "../utils/REPOApp";
import REPOList from "../components/REPOList";
import REPOLoading from "../components/REPOLoading";
// import RepoDetails from "./components/RepoDetails.js";





function BlogNoteAdd() {
    const [input, setInput] = useState({
        title: '',
        content: '',
        // username: '',  // not created 
    
    });
    
 


    // function handleSubmitGitHub(){}


    
    const [username, setUsername] = useState("");
    const [loading, setLoading] = useState(false);
    const [repos, setRepos] = useState({});  //this.setstate

    function handleSubmit(e){
        e.preventDefault();
        searchRepos();
    }
    function searchRepos(){
        setLoading(true);
        axios({
            method: "get",
            url: `https://api.github.com/users/${username}/repos?per_page=1`,
        }).then(res => {
            console.log(res);
            setLoading(false);
            // setRepos(res.data);  to make only 1st index below
            setRepos(res.data[0])
            
        });
    }
    function renderRepo(repo){
        return(
            <div className="row" key={repo.id}>
                <h2 className="repo-name">
                    {repo.name}
                </h2>
            </div>
        )
    }





    function handleChange(event){
        // console.log(event.target);
        const {name, value} = event.target;
        
        setInput({...input, [name]:value})            
        
    }



    
    function handleClick(event){
        event.preventDefault();
        console.log("input happened how", input);

        const newNote = {
            title: input.title,
            content: input.content,
            repoName: repos.name,
            githubusername: username
            
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
                {/* <input 
                    onChange={handleChange} 
                    name="repolink" 
                    value={input.githubusername} 
                    autoComplete="off" 
                    className="form-control" 
                    placeholder="gitHub Username Here"></input> */}
                <input 
                    className='input'
                    // name="repoName" 
                    // value={input.repoName}
                    value={username} 
                    placeholder="GitHub Username"
                    onChange={e => setUsername(e.target.value)}/>
                <button 
                    // className="btn btn-primary ml-2 mb-5"
                    className="button"
                    onClick={handleSubmit}>{loading ? "Searching..." : "Search"}     
                </button>
                {/* <ul id="userRepos"className="list-group mx-auto mb-5"></ul> */}
                <div className="results-container">
                    {/* {repos.map(renderRepo)} */}
                    {repos.name}
                </div>
            </div>


            <div className='form-group'>
                <textarea onChange={handleChange} name="content" value={input.content} autoComplete="off" className="form-control" placeholder="blog content"></textarea>
            </div>

            <button onClick={handleClick} className="btn btn-lg btn-info">Add Note</button>
        </form>




    </div>
}

export default BlogNoteAdd;


         