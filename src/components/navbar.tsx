import React from "react";
import { Outlet,Link } from "react-router-dom";
import './navbar.css';



export default function Navbar() {
function ChangeDarks() {
    const element=document.body;
    element.classList.toggle("dark-mode")
}
  
    return(
        <>
            <header>
                <Link  className="ok" to="/">Home</Link>
                <Link  className="ok" to='/About'>About</Link>
                <Link  className="ok" to='/Article'> Products</Link>
                <Link  className="ok" to="/SignUp">Signup</Link>
                <Link  className="ok" to="/Insert">Login</Link>
               <input onClick={ChangeDarks} type="submit" value="Dark Mode"  />

            </header>         
        </>
    )
}