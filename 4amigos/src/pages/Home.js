import React, { Component } from "react";
import "./Home.css";
import Memo from './components/Memo';
import Timer from './components/Timer';
import Bookmark from './components/Bookmark';
import Projects from './components/Projects';
import Setting from './components/Setting'


class Home extends Component {



    render() {
      return (
 <div id='container'>
 <Memo />
 <Timer />
 <Bookmark />
<Projects />

 </div>
    );
  }
}

export default Home;