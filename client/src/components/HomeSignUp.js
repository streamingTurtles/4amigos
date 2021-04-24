// import React from "react"
import React, { useState } from "react";
import ListResources from "./ListResources"
import resources from "../resources"
import axios from "axios";
import Draggable from 'react-draggable';

var colors=["red","blue","green","orange"]
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
<Draggable bounds="parent">
    <div style={style.content}>
                <h1>SignUp</h1>
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

         </div>
</Draggable>

            <div className ="container-fluid" style={{position: 'absolute',top: '80px'}}>
                <div className = "row">
                    <div className = "col-md-2"></div>
                    <div className = "col-md-8"></div>
                    <div className = "col-md-2">
                        {resources.map((resource,index) => {
                            console.log(resource)
                            return (
                                 <div>
                            <ListResources currentColor={colors[index]} resourceList={resource.resources} title={resource.title}/>
                            </div>
                        )})}
                
                    </div>
                </div>
            </div>
            
 
 </div>
        
    )
}

export default HomeSignUp;