// import React from "react"
import React, { useState } from "react";
import ListResources from "./ListResources"
import resources from "../resources"
import axios from "axios";
var colors=["red","blue","green","orange"]

function HomeSignUp(){
    console.log (resources)
    const [registerUsername, setRegisterUsername] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");
    const [loginUsername, setLoginUsername] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
    const [data, setData] = useState(null);
    
    const register = () => {
        axios({
            method: "POST",
            data: {
                username: registerUsername,
                password: registerPassword
            },
            withCredentials: true,
            url: "http://localhost:3000/register",
        }).then((res) => console.log(res));
    };
    const login = () => {
        axios({
            method: "POST",
            data: {
                username: loginUsername,
                password: loginPassword,
            },
            withCredentials: true,
            url: "http://localhost:3000/login",
        }).then((res) => console.log(res));
    };
    const getUser = () => {
        axios({
            method: "GET",
            withCredentials: true,
            url: "http://localhost:3000/user",
        }).then((res) => {
            setData(res.data);
            console.log(res.data);
          });
    };

    return (

        <div>
                <h1>Home/SignUp</h1>
                <div className="App">
                    <h1>Register</h1>
                    <input placeholder="username" onChange={e => setRegisterUsername(e.target.value)}/>
                    <input placeholder="password" onChange={e => setRegisterPassword(e.target.value)}/>
                    <button onClick={register}>Submit</button>
                </div>
                <div className="App">
                    <h1>Login</h1>
                    <input placeholder="username" onChange={e => setLoginUsername(e.target.value)}/>
                    <input placeholder="password" onChange={e => setLoginPassword(e.target.value)}/>
                    <button onClick={login}>Submit</button>
                </div>
                <div className="App">
                    <h1>Get User</h1>
                    <button onClick={getUser}>Submit</button>
                    {data ? <h1>Welcome Back {data.username}</h1> : null}
                </div>



            <div className ="container-fluid">
                <div className = "row">
                    <div className = "col-md-2"></div>
                    <div className = "col-md-8"></div>
                    <div className = "col-md-2">
                        {resources.map((resource,index) => {
                            console.log(resource)
                            return (
                            <ListResources currentColor={colors[index]} resourceList={resource.resources} title={resource.title}/>
                        )})}
                
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default HomeSignUp;