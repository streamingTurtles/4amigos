// import React from "react"
import React, { useState } from "react";
import ListResources from "./ListResources";
import resources from "../resources";
import axios from "axios";
import "./HomeSignUp.css";
import { motion } from "framer-motion";

var colors = ["red", "blue", "green", "orange"];
const style = {
  content: {
    padding: 30,
    height: 550,
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
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >
      <div className="row row justify-content-between">
        <motion.div
          drag
          dragConstraints={{
            top: -1000,
            left: -1000,
            right: 1000,
            bottom: 100,
          }}
          className="col-md-4"
          style={style.content}
        >
          <h1 className="signUp-title text-center">Inspire. Connect.</h1>
          <hr></hr>
          <div className="App">
            <h1 className="sub-titles">Create your account</h1>
            <input
              className="user-input"
              placeholder="Username"
              onChange={(e) => setRegisterUsername(e.target.value)}
            />
            <input
              className="password-input"
              placeholder="Password"
              type="password"
              onChange={(e) => setRegisterPassword(e.target.value)}
            />
            <button className="hsu-btn" onClick={register}>
              Register
            </button>
            <h1 className="sub-titles">Log in to FULLSTACKERS</h1>
            <input
              className="user-input"
              placeholder="Username"
              onChange={(e) => setLoginUsername(e.target.value)}
            />
            <input
              className="password-input"
              placeholder="Password"
              type="password"
              onChange={(e) => setLoginPassword(e.target.value)}
            />
            <button className="hsu-btn" onClick={login}>
              Login
            </button>
          </div>

          <div className="App">
            <h1 className="sub-titles">Get User</h1>
            <button className="hsu-btn" onClick={getUser}>
              Submit
            </button>
            {data ? (
              <h1 className="sub-titles ">
                You're Signed In, {data.username}!
              </h1>
            ) : null}
          </div>
        </motion.div>

        <div style={{ overflow: "scroll", height: 550 }}>
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
    </motion.div>
  );
}
export default HomeSignUp;
