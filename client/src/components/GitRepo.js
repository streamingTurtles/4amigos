import React from "react";

function GitRepo (props){

 return(
    <div key={props._id}>
        <div><h2>{props.title}</h2></div>
        <div><p>{props.userName}</p></div>
        <div><p>{props.gitHubRepo.repo}</p></div>
        <div><p>{props.gitHubRepo.description}</p></div>
        <div><p>{props.gitHubRepo.url}</p></div>             
        <div><p>{props.content}</p></div>
    </div>  
 )
}

export default GitRepo;