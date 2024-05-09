import React from "react";
import './footer.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';


export default function Footer() {
  
    return(
        <>
            <footer className="footer p-10 bg-neutral text-neutral-content">
              <nav className="io">
                <a href="#">About Us</a>
                <a href="#">Team</a>
                <a href="#">Credits</a>
                <FacebookIcon style={{
                  marginTop:'5px'
                }}/>
                &nbsp;
                <GoogleIcon style={{
                  marginTop:'5px',
                }}/>

              </nav>                
            </footer>
        </>

    )
   
}