import { useEffect } from 'react';
import './Login.css';
import '../../index.css';

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
                    <input type="email" className="form-control"/>
                    <label className="email">Password</label>
                    <input type="password" className="form-control"/>
                    <center>
                        <div>
                            <button className='btnmargin'>Log In</button>
                            <button className='btnmargin'>Sign Up</button>
                            <a href='#'>Forgot Password?</a>
                            <hr></hr>
                        </div>
                    </center>
                </form>
            </div>
        </div>
        </>
    );
}
