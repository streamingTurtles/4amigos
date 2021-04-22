import React from "react";
import {Link} from "react-router-dom"
// import {NavLink} from "react-router-dom"
import "./NavBar.css";

// function NavBar(){
//     return <nav className="navbar bg-dark link">
//         <h4><Link className="nav-link link" to="/" ></Link>Home/SignUp Route</h4>
//         <h4><Link className="nav-link link" to="/blognoteadd"></Link>Blog - Add Note</h4>
//         <h4><Link className="nav-link link" to="/blognotesall"></Link>Blog - All Notes</h4>
//         <h4><Link className="nav-link link" to="/resources"></Link>Resources</h4>
//     </nav>

function NavBar(){
    return <nav className="navbar bg-dark link">
        <h4><Link className="nav-link link" to="/" >Home/SignUp Route</Link></h4>
        <h4><Link className="nav-link link" to="/blognoteadd">Blog - Add Note</Link></h4>
        <h4><Link className="nav-link link" to="/blognotesall">Blog - All Notes</Link></h4>

    </nav>


}

export default NavBar;
