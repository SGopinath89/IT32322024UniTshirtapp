import { useEffect } from 'react';
import './Login.css';

import '../../index.css';

import { NavLink, useNavigate } from "react-router-dom";

export default function Login({ setShowNav }) {
    useEffect(() => {
        setShowNav(false); // Hide the navigation bar when the Login component mounts
    }, [setShowNav]);

    return (
        <>
        <div className="login-div">
            <div className='card login-card'>
                <h2>Log In</h2>
                <form className="login-form">
                    <label className="email">Email</label>
                    <input type="email" placeholder='Type your Email' className="form-control"/>
                    <label className="email">Password</label>
                    <input type="password"  placeholder='Type your Password' className="form-control"/>
                    
                    <center>
                        <div>
                            <p className='pwdalign'><a href='#'>Forgot Password?</a></p>
                            <button className='btnmargin'>Log In</button>
    
                        </div>
                        <div>
                            <p className='textmargin'>Create New Account?</p>
                            <a href="./signup">Sign Up</a>
                        </div>
                    </center>
                </form>
            </div>
        </div>
        </>
    );
}
