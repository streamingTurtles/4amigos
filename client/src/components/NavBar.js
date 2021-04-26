import React, { useState } from "react";
import { Link } from "react-router-dom";
// import {NavLink} from "react-router-dom"
import "./NavBar.css";
import logo from "/Users/nataliacarvajal/Desktop/gitrepos/FULLSTACKERS/4amigos/client/src/img/blue.png";

// function NavBar(){
//     return <nav className="navbar bg-dark link">
//         <h4><Link className="nav-link link" to="/" ></Link>Home/SignUp Route</h4>
//         <h4><Link className="nav-link link" to="/blognoteadd"></Link>Blog - Add Note</h4>
//         <h4><Link className="nav-link link" to="/blognotesall"></Link>Blog - All Notes</h4>
//         <h4><Link className="nav-link link" to="/resources"></Link>Resources</h4>
//     </nav>

function NavBar(props) {
  return (
    <nav className="navbar bg-dark link ">
      <div className="logo">
        <img src={logo} alt="logo" className="img-fluid"></img>
      </div>{" "}
      <h4 className="nav-title">FULLSTACKERS</h4>
      <h4>
        <Link className="nav-link link" to="/">
          Home
        </Link>
      </h4>
      {/* <h4><Link className="nav-link link" to="/api" >SignUp Route</Link></h4> */}
      <h4>
        <Link className="nav-link link" to="/blognoteadd">
          Post on the Board
        </Link>
      </h4>
      <h4>
        <Link className="nav-link link" to="/blognotesall">
          The Board
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
