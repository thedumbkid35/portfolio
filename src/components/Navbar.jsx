import React from "react";
import {NavLink} from "react-router-dom";
import "./Navbar.css";
import About from '../pages/About'
import Contact from '../pages/Contact'

function toggleMenu(){
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('show');
}
function Navbar(){
    return(
        <div className="navbar">
            <div className="hamburger" onClick={toggleMenu}>☰</div>
            <ul className="nav-links">
                <li className="logo"><NavLink to = '/'>Home</NavLink></li>
                <li><NavLink to = '/Projects'>Projects</NavLink></li>
                  <li ><NavLink to = '/About'>About</NavLink></li>
                <li><NavLink to = '/Contact'>Contact</NavLink></li>
              
                
            </ul>
        </div>
    );
}

export default Navbar;
