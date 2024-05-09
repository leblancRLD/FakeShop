import React from "react";
import { Outlet,Link } from "react-router-dom";
import './login.css';

function Logger() {
    return(
        <>
            <div>
                <form action="" method="get">                   
                    <div className="loggin">
                      <h2>SignUp</h2>
                      <label htmlFor="Email">Email:</label>
                      <input type="email" name="" id="" />
                      <label htmlFor="Passwor">Password:</label>
                      <input type="password" name="" id="" />
                      <button type="submit">Submit</button>
                      <br/>
                      <a href="#">Forget Password? click here!</a>  
                    </div>
                    
                
                
                </form>              
            </div>
        
        </>
    )
}
export default Logger;