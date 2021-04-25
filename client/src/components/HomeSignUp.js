// import React from "react"
import React, { useState } from "react";
import ListResources from "./ListResources";
import resources from "../resources";
import axios from "axios";
var colors = ["red", "blue", "green", "orange"];
const style = {
  content: {
    padding: 30,
    width: 500,
    borderStyle: "outset",
    background: "rgb(255,255,255,0.8)",
  },
};

function HomeSignUp() {
  console.log(resources);
  const [registerUsername, setRegisterUsername] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [data, setData] = useState(null);
  const register = () => {
    axios({
      method: "post",
      data: {
        username: registerUsername,
        password: registerPassword,
      },
      withCredentials: true,
      // url: "http://localhost:3000/register",
      url: "/register",
    }).then((res) => console.log(res));
  };
  const login = () => {
    axios({
      method: "post",
      data: {
        username: loginUsername,
        password: loginPassword,
      },
      withCredentials: true,
      // url: "http://localhost:3000/login",
      url: "/login",
    }).then((res) => console.log(res));
  };
  const getUser = () => {
    axios({
      method: "get",
      withCredentials: true,
      // url: "http://localhost:3000/user",
      url: "/user",
    }).then((res) => {
      setData(res.data);
      console.log(res.data);
    });
  };
  return (
    <div>
      <div className="row row justify-content-between">
        <div className="col-md-4" style={style.content}>
          <h1>SignUp</h1>
          <div className="App">
            <h1>Register</h1>
            <input
              placeholder="username"
              onChange={(e) => setRegisterUsername(e.target.value)}
            />
            <input
              placeholder="password"
              type="password"
              onChange={(e) => setRegisterPassword(e.target.value)}
            />
            <button onClick={register}>Submit</button>
            <h1>Login</h1>
            <input
              placeholder="username"
              onChange={(e) => setLoginUsername(e.target.value)}
            />
            <input
              placeholder="password"
              type="password"
              onChange={(e) => setLoginPassword(e.target.value)}
            />
            <button onClick={login}>Submit</button>
          </div>

          <div className="App">
            <h1>Get User</h1>
            <button onClick={getUser}>Submit</button>
            {data ? <h1>Welcome {data.username}!!!</h1> : null}
          </div>
        </div>

        <div style={{ overflow: "scroll", height: 700 }}>
          <div className="col">
            {resources.map((resource, index) => {
              console.log(resource);
              return (
                <ListResources
                  currentColor={colors[index]}
                  resourceList={resource.resources}
                  title={resource.title}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
export default HomeSignUp;
