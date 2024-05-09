import React from "react";
import { Outlet,Link } from "react-router-dom";
import Navbar from './navbar';
import Footer from "./footer";
import './About.css'

export default function Abouts() {
    return(
        <> 
        <Navbar/>
            <div>
               
               <div className="about">
                    <div className="about2">
                     <h2>About US</h2>
                     <h3>We are the best WebSite on all the website
                        you can trust on our product because we treated with particularity precision
                        and quality
                     </h3>
                    </div>                
               </div>
               <div  className="AskMe">
                    <form action="get"  className="Ask">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="" />
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="" />
                        <label htmlFor="">Write your Questions</label>
                        <textarea name="textarea" id="" cols="90" placeholder="Write us whatever you want"></textarea><br/>
                        <button style={{
                            margin:'10px'
                        }} type="submit">Send</button>
                    </form>
                
                </div> 
               
            </div> 
            <Footer/>             
        </>
    )
}