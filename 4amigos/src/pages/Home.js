import React, { useState } from "react";
import "./Home.css";
import Memo from "./components/Memo";
import Timer from "./components/Timer";
import Bookmark from "./components/Bookmark";
import Projects from "./components/Projects";
import Setting from "./components/Setting";

function Home(props) {
  const [bg, setFile] = useState(null);
  function onChange(event) { 
    console.log("refreshed"+bg)
    var bgurl=URL.createObjectURL(event.target.files[0])
    setFile({background:"url('"+bgurl+"')",backgroundSize:'contain'});
  }
console.log(bg)
  return (
    <div id="container" style={bg}>
      <Memo />
      <Timer />
      <Bookmark />
      <Projects />
      <Setting onChange={onChange}></Setting>
    </div>
  );
}

export default Home;
