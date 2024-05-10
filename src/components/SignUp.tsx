import React,{useState} from "react";
import { Outlet,Link } from "react-router-dom";
import './SignUp.css'

export default function SignUp() {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        password: '',
        confirmPassword: '',
        confirm:''
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
      };
    

    return(
        <>
        <div className="identify">
            <div>
                <form action="" method="get">
                <div className="container">
                <h2>Registration Form</h2>
                <form onSubmit={handleSubmit}>
                    <input
                    type="text"
                    name="fullName"
                    placeholder="Full Name"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    />
                    <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    />
                    <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    />
                    <input
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    required
                    />
                    <h4>if you are agree with me click here</h4>
                    <input 
                    type="checkbox"
                    name=""
                    value={formData.confirm}
                    onChange={handleChange}
                    required           
                    />
                    <br></br>
                    <button type="submit">Register</button>
                    <br></br>
                </form>
           </div>
                </form>
                <Link className="back" to="/">Get Back At Home Page</Link>
            </div>
            
            </div>
                
        </>
    )
}