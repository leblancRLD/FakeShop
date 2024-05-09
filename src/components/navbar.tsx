import React from "react";
import { Outlet,Link } from "react-router-dom";
import './navbar.css';


export default function Navbar() {
    return(
        <>
            <header>
                <a href="#"><Link  className="ok" to="/">Home</Link></a>
                <a href="#"><Link className="ok" to='/About'>About</Link></a>
                <a href="#"><Link className="ok" to='/Article'> Products</Link></a>
                <a href="#"><Link className="ok" to="/SignUp">Signup</Link></a>
                <a href="#"><Link className="ok" to="/Insert">Login</Link></a>      
            </header>
           
        </>

    )
}