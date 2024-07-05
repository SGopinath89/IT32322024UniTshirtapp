import { useEffect } from 'react';
import './Login.css';

export default function Login({ setShowNav }) {
    useEffect(() => {
        setShowNav(false); // Hide the navigation bar when the Login component mounts
    }, [setShowNav]);

    return (
        <>
        <div className="login-div">
            <div className='card login-card'>
                <h2>Login</h2>
                <form className="login-form">
                    <label className="email">Email</label>
                    <input type="email" className="form-control"/>
                    <label className="email">Password</label>
                    <input type="password" className="form-control"/>
                    <button><input type="submit" className="form-control"/></button>
                </form>
            </div>
        </div>
            

        </>
    );
}
