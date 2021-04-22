import React from "react";
import {Link} from "react-router-dom"
// import {NavLink} from "react-router-dom"
import "./NavBar.css";

function NavBar(){
    return <nav className="navbar bg-dark link">
        <h4><Link className="nav-link link" to="/" >Home/SignUp Route</Link></h4>
        <h4><Link className="nav-link link" to="/blognoteadd">Blog - Add Note</Link></h4>
        <h4><Link className="nav-link link" to="/blognotesall">Blog - All Notes</Link></h4>
       
    </nav>


}

export default NavBar;
