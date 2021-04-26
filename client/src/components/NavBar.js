import React, { useState } from "react";
import { Link } from "react-router-dom";
// import {NavLink} from "react-router-dom"
import "./NavBar.css";
import logo from "../img/blue.png";

// function NavBar(){
//     return <nav className="navbar bg-dark link">
//         <h4><Link className="nav-link link" to="/" ></Link>Home/SignUp Route</h4>
//         <h4><Link className="nav-link link" to="/blognoteadd"></Link>Blog - Add Note</h4>
//         <h4><Link className="nav-link link" to="/blognotesall"></Link>Blog - All Notes</h4>
//         <h4><Link className="nav-link link" to="/resources"></Link>Resources</h4>
//     </nav>

// function NavBar(props){
//     return <nav className="navbar bg-dark link">
//         <h4><Link className="nav-link link" to="/" >Home/SignUp Route</Link></h4>
        
//         <h4><Link className="nav-link link" to="/blognoteadd">Blog - Add Note</Link></h4>
//         <h4><Link className="nav-link link" to="/blognotesall">Blog - All Notes</Link></h4>
//    <div>
//     <p>Change Background</p>
//      <form>
//       <input
//         type="file"
//         accept=".jpg, .jpeg, .png"
//         onChange={props.onChange}
//       />
//       </form>
//     </div>

function NavBar(props) {
  return (
    <nav className="navbar bg-dark link ">
      <div className="logo">
        <img src={logo} alt="logo" className="img-fluid"></img>
      </div>{" "}
      <h4 className="nav-title">FULLSTACKERS</h4>
      <h4>
        <Link className="nav-link link" to="/">
          <i class="fas fa-igloo fa-lg"></i>
        </Link>
      </h4>
      {/* <h4><Link className="nav-link link" to="/api" >SignUp Route</Link></h4> */}
      <h4>
        <Link className="nav-link link" to="/blognoteadd">
          <i class="fas fa-user-edit fa-lg"></i>{" "}
        </Link>
      </h4>
      <h4>
        <Link className="nav-link link" to="/blognotesall">
          <i class="fas fa-chalkboard fa-lg"></i>{" "}
        </Link>
      </h4>
      {/* <div>
        <p>Change Background</p>
        <form>
          <input
            type="file"
            accept=".jpg, .jpeg, .png"
            onChange={props.onChange}
          />
        </form>
      </div> */}

    </nav>
  );
}

export default NavBar;
